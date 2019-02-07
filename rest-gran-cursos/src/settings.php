<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        "db" => [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'database' => 'gran-gursos',
            'username' => 'root',
            'password' => '',
            'collation' => 'utf8_general_ci',
            'charset' => 'utf8',
            'prefix' => '',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],
        "jwt" => [
            'secret' => 'supersecretkeyyoushouldnotcommittogithub',
        ],
    ],
];
