import { Component, OnInit } from '@angular/core';
import { MockInput } from "../mock-data.service";
import { transformRawSequence, SequenceOutput } from "../transform-sequence.service";


@Component({
  selector: 'app-sequence-form',
  templateUrl: './sequence-form.component.html',
  styleUrls: ['./sequence-form.component.less']
})
export class SequenceFormComponent implements OnInit {
  transformed: SequenceOutput;

  mutations = ["c.391A>T"];
  startIntron = MockInput.startIntron;
  endIntron = MockInput.endIntron;
  sequence = MockInput.rawdata;
  leadingCodonSize = 3;
  codonSizes = [1,2,3];
  showGenes = true;

  constructor() { }

  ngOnInit() {
    this.submitInput();
  }

  submitInput() {
    this.transformed = transformRawSequence({
      EndIntron: this.endIntron,
      StartIntron: this.startIntron,
      FirstCodonSize: this.leadingCodonSize,
      Mutations: this.mutations,
      RawSequence: this.sequence,
    });
  }

  handlePaste(mutations: string) {
    const newMutations = mutations.split(",").map(m => m.trim()).filter(m => /c\.\d+/.test(m));
    this.mutations = this.mutations.concat(newMutations);
  }

}
