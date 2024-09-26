const data = {
  playlists: [
    {
      playlistInfo: {
        id: "1-0",
        title: "Hip-Hop Hits",
        coverImgUrl: "img/cardImage/image1.jpeg",
        trackCount: 4,
      },
      tracks: [
        {
          trackId: "1",
          artistsName: "Eminem",
          trackTitle: "Rap God",
          isHot: true,
          trackFileUrl: "audio/Eminem - Rap God.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track1.jpeg",
        },
        {
          trackId: "2",
          artistsName: "50 cent",
          trackTitle: "In da Club",
          isHot: false,
          trackFileUrl: "audio/50cent%20-%20In%20da%20club.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
        },
        {
          trackId: "3",
          artistsName: "DMX",
          trackTitle: "X Gon' Give It To Ya",
          isHot: true,
          trackFileUrl: "audio/DMX%20-%20X%20Gon'%20Give%20It%20To%20Ya.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track3.jpeg",
        },
        {
          trackId: "4",
          artistsName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
          trackTitle: "You Don't",
          isHot: true,
          trackFileUrl:
            "audio/Eminem%20-%20You%20Don't%20Know%20(feat.%2050%20cent,%20Lloyd%20Banks%20and%20Cashis).mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track4.jpeg",
        },
      ],
    },
    {
      playlistInfo: {
        id: "1-1",
        title: "Rap Hits 1990s",
        coverImgUrl: "img/cardImage/image2.jpeg",
        trackCount: 4,
      },
      tracks: [
        {
          trackId: "1",
          artistsName: "Public Enemy",
          trackTitle: "Fight the Power",
          isHot: true,
          trackFileUrl: "audio/Public%20Enemy%20-%20Fight%20The%20Power.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track5.jpeg",
        },
        {
          trackId: "2",
          artistsName: "Vanila Ice",
          trackTitle: "Ice Ice Baby",
          isHot: false,
          trackFileUrl: "audio/Vanila%20Ice%20-%20Ice%20Baby.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track6.jpeg",
        },
        {
          trackId: "3",
          artistsName: "MC Hammer",
          trackTitle: "You Can’t Touch This",
          isHot: true,
          trackFileUrl:
            "audio/Mc%20Hammer%20-%20You%20Can't%20Touch%20This.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track7.jpeg",
        },
        {
          trackId: "4",
          artistsName: "Brand Nubian",
          trackTitle: "Brand Nubian",
          isHot: true,
          trackFileUrl: "audio/Brand%20Nubian%20-%20Brand%20Nubian.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track8.jpeg",
        },
      ],
    },
  ],
};

function App() {
  const container = document.createElement("div");
  container.classList.add("App");

  container.append(
    Header()
    Main()
  );

  return container;
}

//==============================================================

{
  /*<header>
    <div class="header-container">
      <img src="img/logo/logo.svg" alt="logo" />
      <div class="logo-name">InPlayer</div>
    </div>
    </header>*/
}

function Header() {
  const header = document.createElement("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const img = document.createElement("img");
  img.src = "img/logo/logo.svg";

  const logo = document.createElement("div");
  logo.innerText = "InPlayer";
  logo.classList.add("logo-name");

  headerContainer.append(img, logo);
  header.append(headerContainer);

  return header;
}

//==============================================================
{
  /*<main></main>*/
}

function Main() {
  const container = document.createElement("main");

  container.append(AddPlaylistPanel(), Playlists());

  return container;
}

//==============================================================

{
  /*<div class="add-playlist-panel">
            <h1 class="title">My playlists</h1>
            <button class="button">Add Playlist</button>
          </div>*/
}

function AddPlaylistPanel() {
  const container = document.createElement("div");
  container.classList.add("add-playlist-panel");

  const appHeader = document.createElement("h1");
  appHeader.innerText = "My playlist";
  appHeader.classList.add("title");

  const addButton = document.createElement("button");
  addButton.innerText = "Add playlist"
  addButton.classList.add("button")

  container.append(
    appHeader,
    addButton
  )

  return container;
}

//==============================================================

function Playlists(){
  const container = document.createElement("div");
  container.classList.add("add-playlist-panel");
}


//==============================================================

const root = document.getElementById("root");
root.append(
  App() // => container
);
