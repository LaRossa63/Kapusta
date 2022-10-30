import { Schema, model } from 'mongoose';

const listCategoriesSchema = new Schema({});

export const listCategoriesModel = model(
  'list-categories',
  listCategoriesSchema
);
