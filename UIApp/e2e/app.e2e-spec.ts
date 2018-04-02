import { UIAppPage } from './app.po';

describe('uiapp App', function() {
  let page: UIAppPage;

  beforeEach(() => {
    page = new UIAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
