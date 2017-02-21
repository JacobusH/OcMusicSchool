import { OcMusicSchoolPage } from './app.po';

describe('oc-music-school App', function() {
  let page: OcMusicSchoolPage;

  beforeEach(() => {
    page = new OcMusicSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
