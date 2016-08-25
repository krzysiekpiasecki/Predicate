
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Functor</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Functor_Predicate" >                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Functor/Predicate.html">Predicate</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Functor_Predicate_AndP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/AndP.html">AndP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_ComplexP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/ComplexP.html">ComplexP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_DualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/DualP.html">DualP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_EqualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/EqualP.html">EqualP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_FalseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/FalseP.html">FalseP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_FloatP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/FloatP.html">FloatP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_IfElseP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/IfElseP.html">IfElseP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_IfP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/IfP.html">IfP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_IntP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/IntP.html">IntP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_InvokeP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/InvokeP.html">InvokeP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_NotP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/NotP.html">NotP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_OrP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/OrP.html">OrP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_PredicateInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/PredicateInterface.html">PredicateInterface</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_SingleP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/SingleP.html">SingleP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_StrictEqualP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/StrictEqualP.html">StrictEqualP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_StringP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/StringP.html">StringP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_TrueP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/TrueP.html">TrueP</a>                    </div>                </li>                            <li data-name="class:Functor_Predicate_XorP" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Functor/Predicate/XorP.html">XorP</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Functor.html", "name": "Functor", "doc": "Namespace Functor"},{"type": "Namespace", "link": "Functor/Predicate.html", "name": "Functor\\Predicate", "doc": "Namespace Functor\\Predicate"},
            {"type": "Interface", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/PredicateInterface.html", "name": "Functor\\Predicate\\PredicateInterface", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\PredicateInterface", "fromLink": "Functor/Predicate/PredicateInterface.html", "link": "Functor/Predicate/PredicateInterface.html#method___invoke", "name": "Functor\\Predicate\\PredicateInterface::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/AndP.html", "name": "Functor\\Predicate\\AndP", "doc": "&quot;Composed predicate that represents a short-circuiting logical AND of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\AndP", "fromLink": "Functor/Predicate/AndP.html", "link": "Functor/Predicate/AndP.html#method___construct", "name": "Functor\\Predicate\\AndP::__construct", "doc": "&quot;Composed predicate that represents  a short-circuiting logical AND of this predicate and another.&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\AndP", "fromLink": "Functor/Predicate/AndP.html", "link": "Functor/Predicate/AndP.html#method___invoke", "name": "Functor\\Predicate\\AndP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/ComplexP.html", "name": "Functor\\Predicate\\ComplexP", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\ComplexP", "fromLink": "Functor/Predicate/ComplexP.html", "link": "Functor/Predicate/ComplexP.html#method___construct", "name": "Functor\\Predicate\\ComplexP::__construct", "doc": "&quot;Composed predicate that represents a complex predicate statement&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\ComplexP", "fromLink": "Functor/Predicate/ComplexP.html", "link": "Functor/Predicate/ComplexP.html#method_andP", "name": "Functor\\Predicate\\ComplexP::andP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\ComplexP", "fromLink": "Functor/Predicate/ComplexP.html", "link": "Functor/Predicate/ComplexP.html#method_orP", "name": "Functor\\Predicate\\ComplexP::orP", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\ComplexP", "fromLink": "Functor/Predicate/ComplexP.html", "link": "Functor/Predicate/ComplexP.html#method_negate", "name": "Functor\\Predicate\\ComplexP::negate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\ComplexP", "fromLink": "Functor/Predicate/ComplexP.html", "link": "Functor/Predicate/ComplexP.html#method___invoke", "name": "Functor\\Predicate\\ComplexP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/DualP.html", "name": "Functor\\Predicate\\DualP", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\DualP", "fromLink": "Functor/Predicate/DualP.html", "link": "Functor/Predicate/DualP.html#method___construct", "name": "Functor\\Predicate\\DualP::__construct", "doc": "&quot;Predicate that represents the predicate on two arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\DualP", "fromLink": "Functor/Predicate/DualP.html", "link": "Functor/Predicate/DualP.html#method___invoke", "name": "Functor\\Predicate\\DualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/EqualP.html", "name": "Functor\\Predicate\\EqualP", "doc": "&quot;Predicate that all arguments are equal&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\EqualP", "fromLink": "Functor/Predicate/EqualP.html", "link": "Functor/Predicate/EqualP.html#method___invoke", "name": "Functor\\Predicate\\EqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/FalseP.html", "name": "Functor\\Predicate\\FalseP", "doc": "&quot;Opaque predicate that is always false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\FalseP", "fromLink": "Functor/Predicate/FalseP.html", "link": "Functor/Predicate/FalseP.html#method___construct", "name": "Functor\\Predicate\\FalseP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\FalseP", "fromLink": "Functor/Predicate/FalseP.html", "link": "Functor/Predicate/FalseP.html#method___invoke", "name": "Functor\\Predicate\\FalseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/FloatP.html", "name": "Functor\\Predicate\\FloatP", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\FloatP", "fromLink": "Functor/Predicate/FloatP.html", "link": "Functor/Predicate/FloatP.html#method___construct", "name": "Functor\\Predicate\\FloatP::__construct", "doc": "&quot;Predicate that represents the predicate only on float arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\FloatP", "fromLink": "Functor/Predicate/FloatP.html", "link": "Functor/Predicate/FloatP.html#method___invoke", "name": "Functor\\Predicate\\FloatP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/IfElseP.html", "name": "Functor\\Predicate\\IfElseP", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\IfElseP", "fromLink": "Functor/Predicate/IfElseP.html", "link": "Functor/Predicate/IfElseP.html#method___construct", "name": "Functor\\Predicate\\IfElseP::__construct", "doc": "&quot;Composed predicate that represents if\/else predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\IfElseP", "fromLink": "Functor/Predicate/IfElseP.html", "link": "Functor/Predicate/IfElseP.html#method___invoke", "name": "Functor\\Predicate\\IfElseP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/IfP.html", "name": "Functor\\Predicate\\IfP", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\IfP", "fromLink": "Functor/Predicate/IfP.html", "link": "Functor/Predicate/IfP.html#method___construct", "name": "Functor\\Predicate\\IfP::__construct", "doc": "&quot;Composed predicate that represents if predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\IfP", "fromLink": "Functor/Predicate/IfP.html", "link": "Functor/Predicate/IfP.html#method___invoke", "name": "Functor\\Predicate\\IfP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/IntP.html", "name": "Functor\\Predicate\\IntP", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\IntP", "fromLink": "Functor/Predicate/IntP.html", "link": "Functor/Predicate/IntP.html#method___construct", "name": "Functor\\Predicate\\IntP::__construct", "doc": "&quot;Predicate that represents the predicate only on int arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\IntP", "fromLink": "Functor/Predicate/IntP.html", "link": "Functor/Predicate/IntP.html#method___invoke", "name": "Functor\\Predicate\\IntP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/InvokeP.html", "name": "Functor\\Predicate\\InvokeP", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\InvokeP", "fromLink": "Functor/Predicate/InvokeP.html", "link": "Functor/Predicate/InvokeP.html#method___construct", "name": "Functor\\Predicate\\InvokeP::__construct", "doc": "&quot;Predicate that represents the result of external callable predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\InvokeP", "fromLink": "Functor/Predicate/InvokeP.html", "link": "Functor/Predicate/InvokeP.html#method___invoke", "name": "Functor\\Predicate\\InvokeP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/NotP.html", "name": "Functor\\Predicate\\NotP", "doc": "&quot;Predicate, that is logical negation of the other predicate&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\NotP", "fromLink": "Functor/Predicate/NotP.html", "link": "Functor/Predicate/NotP.html#method___construct", "name": "Functor\\Predicate\\NotP::__construct", "doc": "&quot;Predicate, that is logical negation of the other predicate&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\NotP", "fromLink": "Functor/Predicate/NotP.html", "link": "Functor/Predicate/NotP.html#method___invoke", "name": "Functor\\Predicate\\NotP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/OrP.html", "name": "Functor\\Predicate\\OrP", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\OrP", "fromLink": "Functor/Predicate/OrP.html", "link": "Functor/Predicate/OrP.html#method___construct", "name": "Functor\\Predicate\\OrP::__construct", "doc": "&quot;Composed predicate that represents the short-circuiting logical OR of this predicate and the\nother predicates&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\OrP", "fromLink": "Functor/Predicate/OrP.html", "link": "Functor/Predicate/OrP.html#method___invoke", "name": "Functor\\Predicate\\OrP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/PredicateInterface.html", "name": "Functor\\Predicate\\PredicateInterface", "doc": "&quot;A functional predicate that may be true or false&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\PredicateInterface", "fromLink": "Functor/Predicate/PredicateInterface.html", "link": "Functor/Predicate/PredicateInterface.html#method___invoke", "name": "Functor\\Predicate\\PredicateInterface::__invoke", "doc": "&quot;Invokes a predicate on the subjects and returns the result that may be true or false\ndepending on the predicate subjects&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/SingleP.html", "name": "Functor\\Predicate\\SingleP", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\SingleP", "fromLink": "Functor/Predicate/SingleP.html", "link": "Functor/Predicate/SingleP.html#method___construct", "name": "Functor\\Predicate\\SingleP::__construct", "doc": "&quot;Predicate that represents the predicate on single argument&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\SingleP", "fromLink": "Functor/Predicate/SingleP.html", "link": "Functor/Predicate/SingleP.html#method___invoke", "name": "Functor\\Predicate\\SingleP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/StrictEqualP.html", "name": "Functor\\Predicate\\StrictEqualP", "doc": "&quot;Predicate that all arguments are strictly equal&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\StrictEqualP", "fromLink": "Functor/Predicate/StrictEqualP.html", "link": "Functor/Predicate/StrictEqualP.html#method___invoke", "name": "Functor\\Predicate\\StrictEqualP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/StringP.html", "name": "Functor\\Predicate\\StringP", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\StringP", "fromLink": "Functor/Predicate/StringP.html", "link": "Functor/Predicate/StringP.html#method___construct", "name": "Functor\\Predicate\\StringP::__construct", "doc": "&quot;Predicate that represents the predicate only on string arguments&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\StringP", "fromLink": "Functor/Predicate/StringP.html", "link": "Functor/Predicate/StringP.html#method___invoke", "name": "Functor\\Predicate\\StringP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/TrueP.html", "name": "Functor\\Predicate\\TrueP", "doc": "&quot;Opaque predicate that is always true&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\TrueP", "fromLink": "Functor/Predicate/TrueP.html", "link": "Functor/Predicate/TrueP.html#method___construct", "name": "Functor\\Predicate\\TrueP::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\TrueP", "fromLink": "Functor/Predicate/TrueP.html", "link": "Functor/Predicate/TrueP.html#method___invoke", "name": "Functor\\Predicate\\TrueP::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Functor\\Predicate", "fromLink": "Functor/Predicate.html", "link": "Functor/Predicate/XorP.html", "name": "Functor\\Predicate\\XorP", "doc": "&quot;Composed predicate that represents a short-circuiting logical XOR of this predicate and another&quot;"},
                                                        {"type": "Method", "fromName": "Functor\\Predicate\\XorP", "fromLink": "Functor/Predicate/XorP.html", "link": "Functor/Predicate/XorP.html#method___construct", "name": "Functor\\Predicate\\XorP::__construct", "doc": "&quot;XorP&quot;"},
                    {"type": "Method", "fromName": "Functor\\Predicate\\XorP", "fromLink": "Functor/Predicate/XorP.html", "link": "Functor/Predicate/XorP.html#method___invoke", "name": "Functor\\Predicate\\XorP::__invoke", "doc": "&quot;&quot;"},
            
            
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


