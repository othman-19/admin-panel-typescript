import {Category, CategoryConfiguration, CategoryServiceFactory, LogLevel} from 'typescript-logging';

CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Debug));
export const logger = new Category('product', new Category('app'));
export const baseAddress = '<paste api gateway address to api>';
