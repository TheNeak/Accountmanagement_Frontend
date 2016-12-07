import { KontoverwaltungPage } from './app.po';

describe('kontoverwaltung App', function() {
  let page: KontoverwaltungPage;

  beforeEach(() => {
    page = new KontoverwaltungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
