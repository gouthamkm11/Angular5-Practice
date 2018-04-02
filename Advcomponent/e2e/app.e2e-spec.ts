import { AdvcomponentPage } from './app.po';

describe('advcomponent App', function() {
  let page: AdvcomponentPage;

  beforeEach(() => {
    page = new AdvcomponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
