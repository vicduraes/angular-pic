import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";
import { environment } from "./../../../environments/environment";
import { PhotoComment } from "./photo-comment";

@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${environment.API}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append("page", page.toString());
    return this.http.get<Photo[]>(`${environment.API}/${userName}/photos`, {
      params,
    });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("allowComments", allowComments ? "true" : "false");
    formData.append("imageFile", file);
    return this.http.post(`${environment.API}/photos/upload`, formData);
  }

  findById(photoId: number) {
    return this.http.get<Photo>(`${environment.API}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(
      `${environment.API}/photos/${photoId}/comments`
    );
  }

  addComment(photoId: number, comment: string) {
    return this.http.post(`${environment.API}/photos/${photoId}/comments`, {
      commentText: comment,
    });
  }
}
