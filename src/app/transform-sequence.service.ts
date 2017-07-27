import { chunk } from "lodash";
import { GeneMap } from "./gene-lookup";

export interface SequenceInput {
  RawSequence: string,
  StartIntron: string;
  EndIntron: string;
  FirstCodonSize: number;
  Mutations: string[];
}

export interface AminoGroup {
  AminoLetters: { Letter: string, Mutated?: boolean}[],
  Gene?: string
}

export interface SequenceOutput {
  StartIntron: AminoGroup[];
  Exon: AminoGroup[];
  EndIntron: AminoGroup[];
}

interface IntronPosition {
  SequenceOffset: number;
  IntronLength: number
}

export function transformRawSequence(input: SequenceInput): SequenceOutput {
  const [exonStartCIndex, startIntronLength] = input.StartIntron.match(/c\.(\d+)-?(\d*)/).slice(1).map(Number);
  const [exonEndCIndex, endIntronLength] = input.EndIntron.match(/c\.(\d+)\+?(\d*)/).slice(1).map(Number);

  const rawStartIntron = input.RawSequence.substring(0, startIntronLength);
  const rawExon = input.RawSequence.substring(startIntronLength, exonEndCIndex - exonStartCIndex + startIntronLength + 1);
  const rawEndIntron = input.RawSequence.substring(startIntronLength + rawExon.length, startIntronLength + rawExon.length + endIntronLength + 1);

  return {
    StartIntron: transformRawIntron(rawStartIntron, input),
    Exon: transformRawExon(rawExon, input, exonStartCIndex),
    EndIntron: transformRawEndIntron(rawEndIntron, input),
  }
}

function transformRawIntron(sequence: string, input: SequenceInput): AminoGroup[] {
  return chunk(sequence.split("").reverse(), 10).reverse().map(group => ({
    AminoLetters: group.reverse().map(letter => ({ Letter: letter })),
  }));
}

function transformRawEndIntron(sequence: string, input: SequenceInput): AminoGroup[] {
  return chunk(sequence, 10).map(group => ({
    AminoLetters: group.map(letter => ({ Letter: letter })),
  }));
}

function transformRawExon(sequence: string, input: SequenceInput, exonStartCIndex: number): AminoGroup[] {
  const padding = input.FirstCodonSize === 3 ? "" : input.FirstCodonSize === 2 ? " " : "  ";
  const sequenceWithMutations = (padding + sequence).split("")
    .map((letter, index) => ({ Letter: letter, Mutated: isMutated(index) }));
  return chunk(sequenceWithMutations, 3).map(group => ({
    AminoLetters: group,
    Gene: GeneMap[group.map(letter => letter.Letter).join("")],
  }));

  function isMutated(index): boolean {
    return input.Mutations.some(mutation => {
      const [offset, conversion] = mutation.match(/c\.(\d+)\s*(.*)/).splice(1);
      return Number(offset) === index + exonStartCIndex;
    });
  }
}
