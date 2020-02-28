<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/signin' => [[['_route' => 'sign_in', '_controller' => 'App\\Controller\\AuthController::signIn'], null, null, null, false, false, null]],
        '/signup' => [[['_route' => 'sign_up', '_controller' => 'App\\Controller\\AuthController::signUp'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'homepage', '_controller' => 'App\\Controller\\MainController::welcome'], null, null, null, false, false, null]],
        '/play' => [[['_route' => 'game_list', '_controller' => 'App\\Controller\\MainController::gameList'], null, null, null, false, false, null]],
        '/ressources' => [[['_route' => 'ressources', '_controller' => 'App\\Controller\\MainController::ressources'], null, null, null, false, false, null]],
        '/pokemon/list' => [[['_route' => 'list_pokemon', '_controller' => 'App\\Controller\\PokemonController::pokemonList'], null, null, null, false, false, null]],
        '/trainer/list' => [[['_route' => 'list_trainer', '_controller' => 'App\\Controller\\TrainerController::trainerList'], null, null, null, false, false, null]],
        '/admin' => [[['_route' => 'easyadmin', '_controller' => 'EasyCorp\\Bundle\\EasyAdminBundle\\Controller\\EasyAdminController::indexAction'], null, null, null, true, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/game/([^/]++)(*:183)'
                .'|/p(?'
                    .'|okemon/([^/]++)(*:211)'
                    .'|rofil/([^/]++)(*:233)'
                .')'
                .'|/trainer/([^/]++)(*:259)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        183 => [[['_route' => 'game_board', '_controller' => 'App\\Controller\\GameController::gameBoard'], ['id'], null, null, false, true, null]],
        211 => [[['_route' => 'detail_pokemon', '_controller' => 'App\\Controller\\PokemonController::pokemonById'], ['id'], null, null, false, true, null]],
        233 => [[['_route' => 'profil', '_controller' => 'App\\Controller\\ProfilController::profil'], ['slug'], null, null, false, true, null]],
        259 => [
            [['_route' => 'detail_trainer', '_controller' => 'App\\Controller\\TrainerController::trainerById'], ['id'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
