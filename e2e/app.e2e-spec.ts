import { ExonAnnotatePage } from './app.po';

describe('exon-annotate App', () => {
  let page: ExonAnnotatePage;

  beforeEach(() => {
    page = new ExonAnnotatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
