<?php

declare(strict_types=1);

namespace P;

array_map(function (string $p) {
    require_once(
        sprintf(
            '%s/%s.php',
            __DIR__,
            $p
        )
    );
}, array(
    'notp',
    'andp',
    'orp',
    'equalp',
    'samep',
    'nullp',
    'intp',
    'floatp',
    'boolp',
    'arrayp',
    'objectp',
    'resourcep',
    'stringp',
    'charp',
    'scalarp',
    'numericp',
    'emptyp',
    'callablep',
    'upperp',
    'lowerp',
    'evenp',
    'oddp'
));
