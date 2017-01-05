import { McdtrWebClientPage } from './app.po';

describe('mcdtr-web-client App', function() {
  let page: McdtrWebClientPage;

  beforeEach(() => {
    page = new McdtrWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
