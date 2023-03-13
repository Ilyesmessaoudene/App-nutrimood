// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import HomeLoaderController from "./home_loader_controller"
application.register("home-loader", HomeLoaderController)

import MoodsListController from "./moods_list_controller"
application.register("moods-list", MoodsListController)

import SymptomsListController from "./symptoms_list_controller"
application.register("symptoms-list", SymptomsListController)
