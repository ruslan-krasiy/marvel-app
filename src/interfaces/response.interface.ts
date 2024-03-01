import { Hero } from "./hero.interface";

export interface ApiResponse {
  code:            number;
  status:          string;
  copyright:       string;
  attributionText: string;
  attributionHTML: string;
  etag:            string;
  data:            Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Hero[];
}

export interface Stories {
  available:     number;
  collectionURI: string;
  items:         StoriesItem[];
  returned:      number;
}

export interface StoriesItem {
  resourceURI: string;
  name:        string;
  type:        Type;
}

export enum Type {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path:      string;
  extension: string;
}

export interface URLType {
  type: string;
  url:  string;
}
