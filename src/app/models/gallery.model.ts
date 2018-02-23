export class Gallery {
    public id: number;
    public title: string;
    public description: string;
    public image_urls: any [];
    public user_id: number;
    public user: any;
    public comments: any;
    public created_at: string;
  
    constructor(id? , title?, description?, image_urls?, user_id?, user?, comments?, created_at?) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image_urls = image_urls;
      this.user_id = user_id;
      this.user = user;
      this.comments = comments;
      this.created_at = created_at;
    }
  }
