import { Angular2Page } from './app.po';

describe('migration-project App', function() {
  let page: Angular2Page;

  beforeEach(() => {
    page = new Angular2Page();
  });

  it('should display message saying angular2!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2!');
  });
});
