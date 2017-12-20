class ArticleService {
  fetchAll() {
    return [
      {
        title: 'You can add your article',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est mi, ultricies vitae leo id, suscipit commodo tortor. Ut pretium lorem diam, quis interdum justo hendrerit vel. Nullam metus orci, feugiat in nulla eget, dictum mollis eros. Nullam sed scelerisque arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non arcu ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In tincidunt mi augue, a eleifend dolor porta laoreet. Curabitur rhoncus sagittis enim, luctus posuere sapien tristique et. Duis consequat dolor et neque tempor, at pretium ante euismod. Fusce maximus turpis enim, id posuere metus tincidunt sed. Pellentesque gravida sit amet elit ac ullamcorper.'
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        body: 'Praesent efficitur rutrum dignissim. Aliquam gravida tincidunt lacus vel dapibus. Morbi euismod, dui tristique aliquet ullamcorper, diam nisl pharetra leo, sit amet eleifend massa magna et metus. Cras porta pulvinar ex sed pharetra. Phasellus et sodales metus. Curabitur ipsum justo, condimentum vitae tristique in, cursus id erat. Suspendisse feugiat pulvinar felis ut semper. Cras in pulvinar mi. Cras ut nisi neque. Nunc pretium varius condimentum. Nam nec lacus at dui tincidunt porta id sed lectus. Maecenas felis lectus, pretium faucibus nibh nec, cursus luctus nisl. Pellentesque dictum pulvinar nunc, id pellentesque elit dignissim sed.'
      }
    ];
  }

  fetch() {

  }

  add(article) {
    return {};
  }

  edit(article) {
    return {};
  }

  remove(index) {
    return {};
  }
}

export default ArticleService;
