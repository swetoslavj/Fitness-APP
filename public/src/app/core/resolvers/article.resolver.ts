import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<any> {

  constructor(
    private articleService: ArticleService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.articleService.getArticles();
  }
}