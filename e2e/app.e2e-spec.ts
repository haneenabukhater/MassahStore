import { MassahStorePage } from './app.po';

describe('massah-store App', () => {
  let page: MassahStorePage;

  beforeEach(() => {
    page = new MassahStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
