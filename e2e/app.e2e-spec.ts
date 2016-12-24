import { ServerlessTodoPage } from './app.po';

describe('serverless-todo App', function() {
  let page: ServerlessTodoPage;

  beforeEach(() => {
    page = new ServerlessTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
