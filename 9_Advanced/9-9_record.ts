{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // such as a map data structure
  const navigations: Record<Page, PageInfo> = {
    home: { title: 'sweet home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
  }

  for (const nav in navigations) {
    console.log(nav);
  }
}