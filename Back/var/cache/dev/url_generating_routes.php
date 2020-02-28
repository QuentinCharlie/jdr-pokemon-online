<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
    '_wdt' => [['token'], ['_controller' => 'web_profiler.controller.profiler::toolbarAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_wdt']], [], []],
    '_profiler_home' => [[], ['_controller' => 'web_profiler.controller.profiler::homeAction'], [], [['text', '/_profiler/']], [], []],
    '_profiler_search' => [[], ['_controller' => 'web_profiler.controller.profiler::searchAction'], [], [['text', '/_profiler/search']], [], []],
    '_profiler_search_bar' => [[], ['_controller' => 'web_profiler.controller.profiler::searchBarAction'], [], [['text', '/_profiler/search_bar']], [], []],
    '_profiler_phpinfo' => [[], ['_controller' => 'web_profiler.controller.profiler::phpinfoAction'], [], [['text', '/_profiler/phpinfo']], [], []],
    '_profiler_search_results' => [['token'], ['_controller' => 'web_profiler.controller.profiler::searchResultsAction'], [], [['text', '/search/results'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_open_file' => [[], ['_controller' => 'web_profiler.controller.profiler::openAction'], [], [['text', '/_profiler/open']], [], []],
    '_profiler' => [['token'], ['_controller' => 'web_profiler.controller.profiler::panelAction'], [], [['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_router' => [['token'], ['_controller' => 'web_profiler.controller.router::panelAction'], [], [['text', '/router'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_exception' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::body'], [], [['text', '/exception'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    '_profiler_exception_css' => [['token'], ['_controller' => 'web_profiler.controller.exception_panel::stylesheet'], [], [['text', '/exception.css'], ['variable', '/', '[^/]++', 'token', true], ['text', '/_profiler']], [], []],
    'sign_in' => [[], ['_controller' => 'App\\Controller\\AuthController::signIn'], [], [['text', '/signin']], [], []],
    'sign_up' => [[], ['_controller' => 'App\\Controller\\AuthController::signUp'], [], [['text', '/signup']], [], []],
    'game_board' => [['id'], ['_controller' => 'App\\Controller\\GameController::gameBoard'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/game']], [], []],
    'homepage' => [[], ['_controller' => 'App\\Controller\\MainController::welcome'], [], [['text', '/']], [], []],
    'game_list' => [[], ['_controller' => 'App\\Controller\\MainController::gameList'], [], [['text', '/play']], [], []],
    'ressources' => [[], ['_controller' => 'App\\Controller\\MainController::ressources'], [], [['text', '/ressources']], [], []],
    'list_pokemon' => [[], ['_controller' => 'App\\Controller\\PokemonController::pokemonList'], [], [['text', '/pokemon/list']], [], []],
    'detail_pokemon' => [['id'], ['_controller' => 'App\\Controller\\PokemonController::pokemonById'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/pokemon']], [], []],
    'profil' => [['slug'], ['_controller' => 'App\\Controller\\ProfilController::profil'], [], [['variable', '/', '[^/]++', 'slug', true], ['text', '/profil']], [], []],
    'list_trainer' => [[], ['_controller' => 'App\\Controller\\TrainerController::trainerList'], [], [['text', '/trainer/list']], [], []],
    'detail_trainer' => [['id'], ['_controller' => 'App\\Controller\\TrainerController::trainerById'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/trainer']], [], []],
    'easyadmin' => [[], ['_controller' => 'EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\EasyAdminController::indexAction'], [], [['text', '/admin/']], [], []],
];
