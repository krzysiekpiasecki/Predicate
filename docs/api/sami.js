
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Functor" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Functor.html">Functor</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Functor_AndP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/AndP.html">AndP</a>                    </div>                </li>                            <li data-name="class:Functor_ComplexP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/ComplexP.html">ComplexP</a>                    </div>                </li>                            <li data-name="class:Functor_DualP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/DualP.html">DualP</a>                    </div>                </li>                            <li data-name="class:Functor_EqualP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/EqualP.html">EqualP</a>                    </div>                </li>                            <li data-name="class:Functor_FalseP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/FalseP.html">FalseP</a>                    </div>                </li>                            <li data-name="class:Functor_FloatP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/FloatP.html">FloatP</a>                    </div>                </li>                            <li data-name="class:Functor_IfElseP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/IfElseP.html">IfElseP</a>                    </div>                </li>                            <li data-name="class:Functor_IfP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/IfP.html">IfP</a>                    </div>                </li>                            <li data-name="class:Functor_IntP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/IntP.html">IntP</a>                    </div>                </li>                            <li data-name="class:Functor_InvokeP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/InvokeP.html">InvokeP</a>                    </div>                </li>                            <li data-name="class:Functor_NotP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/NotP.html">NotP</a>                    </div>                </li>                            <li data-name="class:Functor_OrP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/OrP.html">OrP</a>                    </div>                </li>                            <li data-name="class:Functor_PredicateInterface" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/PredicateInterface.html">PredicateInterface</a>                    </div>                </li>                            <li data-name="class:Functor_SingleP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/SingleP.html">SingleP</a>                    </div>                </li>                            <li data-name="class:Functor_StrictEqualP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/StrictEqualP.html">StrictEqualP</a>                    </div>                </li>                            <li data-name="class:Functor_StringP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/StringP.html">StringP</a>                    </div>                </li>                            <li data-name="class:Functor_TrueP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/TrueP.html">TrueP</a>                    </div>                </li>                            <li data-name="class:Functor_XorP" >                    <div style="padding-left:26px" class="hd leaf">                        <a href="Functor/XorP.html">XorP</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Functor.html", "name": "Functor", "doc": "Namespace Functor"},
            {"type": "Interface", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/PredicateInterface.html", "name": "Functor\\PredicateInterface", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\PredicateInterface", "fromLink": "Functor/PredicateInterface.html", "link": "Functor/PredicateInterface.html#method___invoke", "name": "Functor\\PredicateInterface::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/AndP.html", "name": "Functor\\AndP", "doc": "&quot;Composed predicate that represents a short-circuiting logical AND of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\AndP", "fromLink": "Functor/AndP.html", "link": "Functor/AndP.html#method___construct", "name": "Functor\\AndP::__construct", "doc": "&quot;Composed predicate that represents  a short-circuiting logical AND of this predicate and another.&quot;"},
                    {"type": "Method", "fromName": "Functor\\AndP", "fromLink": "Functor/AndP.html", "link": "Functor/AndP.html#method___invoke", "name": "Functor\\AndP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/ComplexP.html", "name": "Functor\\ComplexP", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\ComplexP", "fromLink": "Functor/ComplexP.html", "link": "Functor/ComplexP.html#method___construct", "name": "Functor\\ComplexP::__construct", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                    {"type": "Method", "fromName": "Functor\\ComplexP", "fromLink": "Functor/ComplexP.html", "link": "Functor/ComplexP.html#method_andP", "name": "Functor\\ComplexP::andP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\ComplexP", "fromLink": "Functor/ComplexP.html", "link": "Functor/ComplexP.html#method_orP", "name": "Functor\\ComplexP::orP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\ComplexP", "fromLink": "Functor/ComplexP.html", "link": "Functor/ComplexP.html#method_negate", "name": "Functor\\ComplexP::negate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\ComplexP", "fromLink": "Functor/ComplexP.html", "link": "Functor/ComplexP.html#method___invoke", "name": "Functor\\ComplexP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/DualP.html", "name": "Functor\\DualP", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\DualP", "fromLink": "Functor/DualP.html", "link": "Functor/DualP.html#method___construct", "name": "Functor\\DualP::__construct", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\DualP", "fromLink": "Functor/DualP.html", "link": "Functor/DualP.html#method___invoke", "name": "Functor\\DualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/EqualP.html", "name": "Functor\\EqualP", "doc": "&quot;EqualP&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\EqualP", "fromLink": "Functor/EqualP.html", "link": "Functor/EqualP.html#method___invoke", "name": "Functor\\EqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/FalseP.html", "name": "Functor\\FalseP", "doc": "&quot;Opaque predicate that is always false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\FalseP", "fromLink": "Functor/FalseP.html", "link": "Functor/FalseP.html#method___construct", "name": "Functor\\FalseP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\FalseP", "fromLink": "Functor/FalseP.html", "link": "Functor/FalseP.html#method___invoke", "name": "Functor\\FalseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/FloatP.html", "name": "Functor\\FloatP", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\FloatP", "fromLink": "Functor/FloatP.html", "link": "Functor/FloatP.html#method___construct", "name": "Functor\\FloatP::__construct", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\FloatP", "fromLink": "Functor/FloatP.html", "link": "Functor/FloatP.html#method___invoke", "name": "Functor\\FloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/IfElseP.html", "name": "Functor\\IfElseP", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\IfElseP", "fromLink": "Functor/IfElseP.html", "link": "Functor/IfElseP.html#method___construct", "name": "Functor\\IfElseP::__construct", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\IfElseP", "fromLink": "Functor/IfElseP.html", "link": "Functor/IfElseP.html#method___invoke", "name": "Functor\\IfElseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/IfP.html", "name": "Functor\\IfP", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\IfP", "fromLink": "Functor/IfP.html", "link": "Functor/IfP.html#method___construct", "name": "Functor\\IfP::__construct", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\IfP", "fromLink": "Functor/IfP.html", "link": "Functor/IfP.html#method___invoke", "name": "Functor\\IfP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/IntP.html", "name": "Functor\\IntP", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\IntP", "fromLink": "Functor/IntP.html", "link": "Functor/IntP.html#method___construct", "name": "Functor\\IntP::__construct", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\IntP", "fromLink": "Functor/IntP.html", "link": "Functor/IntP.html#method___invoke", "name": "Functor\\IntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/InvokeP.html", "name": "Functor\\InvokeP", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\InvokeP", "fromLink": "Functor/InvokeP.html", "link": "Functor/InvokeP.html#method___construct", "name": "Functor\\InvokeP::__construct", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\InvokeP", "fromLink": "Functor/InvokeP.html", "link": "Functor/InvokeP.html#method___invoke", "name": "Functor\\InvokeP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/NotP.html", "name": "Functor\\NotP", "doc": "&quot;Predicate, that is logical negation of the other predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\NotP", "fromLink": "Functor/NotP.html", "link": "Functor/NotP.html#method___construct", "name": "Functor\\NotP::__construct", "doc": "&quot;Predicate, that is logical negation of the other predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\NotP", "fromLink": "Functor/NotP.html", "link": "Functor/NotP.html#method___invoke", "name": "Functor\\NotP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/OrP.html", "name": "Functor\\OrP", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\OrP", "fromLink": "Functor/OrP.html", "link": "Functor/OrP.html#method___construct", "name": "Functor\\OrP::__construct", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and the\nother predicates&quot;"},
                    {"type": "Method", "fromName": "Functor\\OrP", "fromLink": "Functor/OrP.html", "link": "Functor/OrP.html#method___invoke", "name": "Functor\\OrP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/PredicateInterface.html", "name": "Functor\\PredicateInterface", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\PredicateInterface", "fromLink": "Functor/PredicateInterface.html", "link": "Functor/PredicateInterface.html#method___invoke", "name": "Functor\\PredicateInterface::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/SingleP.html", "name": "Functor\\SingleP", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\SingleP", "fromLink": "Functor/SingleP.html", "link": "Functor/SingleP.html#method___construct", "name": "Functor\\SingleP::__construct", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                    {"type": "Method", "fromName": "Functor\\SingleP", "fromLink": "Functor/SingleP.html", "link": "Functor/SingleP.html#method___invoke", "name": "Functor\\SingleP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/StrictEqualP.html", "name": "Functor\\StrictEqualP", "doc": "&quot;StrictEqualP&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\StrictEqualP", "fromLink": "Functor/StrictEqualP.html", "link": "Functor/StrictEqualP.html#method___invoke", "name": "Functor\\StrictEqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/StringP.html", "name": "Functor\\StringP", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\StringP", "fromLink": "Functor/StringP.html", "link": "Functor/StringP.html#method___construct", "name": "Functor\\StringP::__construct", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\StringP", "fromLink": "Functor/StringP.html", "link": "Functor/StringP.html#method___invoke", "name": "Functor\\StringP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/TrueP.html", "name": "Functor\\TrueP", "doc": "&quot;Opaque predicate that is always true&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\TrueP", "fromLink": "Functor/TrueP.html", "link": "Functor/TrueP.html#method___construct", "name": "Functor\\TrueP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\TrueP", "fromLink": "Functor/TrueP.html", "link": "Functor/TrueP.html#method___invoke", "name": "Functor\\TrueP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor", "fromLink": "Functor.html", "link": "Functor/XorP.html", "name": "Functor\\XorP", "doc": "&quot;Composed predicate that represents a short-circuiting logical XOR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\XorP", "fromLink": "Functor/XorP.html", "link": "Functor/XorP.html#method___construct", "name": "Functor\\XorP::__construct", "doc": "&quot;XorP&quot;"},
                    {"type": "Method", "fromName": "Functor\\XorP", "fromLink": "Functor/XorP.html", "link": "Functor/XorP.html#method___invoke", "name": "Functor\\XorP::__invoke", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


