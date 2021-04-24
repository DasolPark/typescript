{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMetadata = Pick<Video, 'id' | 'title'>

  const videos: Array<Video> = [
    {
      id: '1',
      title: 'first video',
      url: 'https://video.com',
      data: 'byte-data...',
    },
    {
      id: '2',
      title: 'second video',
      url: 'https://video.com',
      data: 'byte-data...',
    },
  ]

  function getVideo(videos: Array<Video>, id: string): Video {
    return videos[id];
  }

  function getvideoMetadata(videos: Array<Video>, id: string): VideoMetadata {
    const selectedVideo: Video = videos[id];
    return { id: selectedVideo.id, title: selectedVideo.title };
  }

  const result = getvideoMetadata(videos, '1');
  console.log(result);
}