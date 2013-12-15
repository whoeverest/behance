(function( $ ) {
    $.fn.behanceButton = function( id ) {
        if ( id === undefined ) {
            throw( "Project ID must be specified." );
        }

        // Init
        var timestamp = new Date().getTime(),
            upvote_url = 'http://www.behance.net/c?a=a&e=project&s=1&use_jquery=1&count=1&stamp=' + timestamp + '&id=' + id,
            project_iframe = "<iframe id='project_page_" + id + "' src='http://behance.net/gallery/The-Name-Doesnt-Matter/" + id + "' style='display: none'></iframe>",
            upvote_iframe = "<iframe src='" + upvote_url + "' style='display: none'></iframe>";

        // Style
        this.css( "background-image", "url(http://a2.behance.net/img/sprites/project-icons.png?cb=183993522)" );
        this.css( "cursor", "pointer" );
        this.css( "display", "block" );
        this.css( "width", "100px" );
        this.css( "height", "100px" );
        this.css( "background-position", "0px -300px" );
        this.css( "text-indent", "-9999px" );
        this.css( "font-size", "0" );
        this.css( "line-height", "0" );

        // Load the project page in a hidden iframe to get the cookies.
        this.append( project_iframe );

        // Add class to check click or not
        this.attr('data-state','unclick');

        // remove the project page iframe after 2 seconds, we only needed the cookies
        setTimeout(function() {
            $( "#project_page_" + id ).remove();
        }, 2000);

        // On hover
        
        this.hover(function() {
            if($(this).attr('data-state') === 'unclick'){
                $( this ).css( "background-position", "-102px -300px" );
            }
        }, function(){
            if($(this).attr('data-state') === 'unclick'){
                $( this ).css( "background-position", "0px -300px" );
            }
        });
    

        // On click, make a request to up the count and change the button sprite.
        this.click(function() {
            $( this ).append( upvote_iframe );
            $( this ).css( "background-position", "-204px -300px" );
            $(this).attr('data-state','clicked');
        });

        return this;
    }
})( jQuery )
