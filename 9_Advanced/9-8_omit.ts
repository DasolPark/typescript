{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'h'>

  function getVideo(id: string): Video {
    return {
      id: '1',
      title: 'video',
      url: 'https://www.video.com',
      data: 'byte-data...',
    }
  }

  function getvideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'second video'
    };
  }
}