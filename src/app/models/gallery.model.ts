export class Gallery {
    public id: number;
    public title: string;
    public description: string;
    public image_urls: any [];
    public user_id: number;
  
    constructor(id? , title?, description?, image_urls?, user_id?) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image_urls = image_urls;
      this.user_id = user_id;
    }
  }
