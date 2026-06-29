{#each Array(200)}
    <!-- <svg class="snow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"></circle></svg>  -->
    <div class="snow"></div>
{/each}

<style lang="scss">
    @use "sass:math";
    @-moz-document url-prefix() {

        .snow:nth-child(odd){
            background: var(--snow-color, var(--current-element-primary));
            box-shadow: 0px 0px 39px 5px var(--snow-color, var(--current-element-primary));
        }
    
        .snow:nth-child(even){
            background: var(--snow-color-secondary, var(--current-element-secondary));
            box-shadow: 0px 0px 39px 5px var(--snow-color-secondary, var(--current-element-secondary));
            
        }
    }
    @function random_range($min, $max) {
        $rand: math.random();
        $random_range: $min + math.floor($rand * (($max - $min) + 1));
        @return $random_range;
    }
    
    .snow {
        $total: 200;
        position: fixed;
        width: 10px;
        left: 0;
        height: 10px;
        background: rgba(255, 255, 255, 0);
        border-radius: 50%;
        pointer-events:none;
        transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        

    
        @for $i from 1 through $total {
        $random-x: math.random(1000000) * 0.0001vw;
        $random-offset: random_range(-100000, 100000) * 0.0001vw;
        $random-x-end: $random-x + $random-offset;
        $random-x-end-yoyo: $random-x + calc($random-offset / 2);
        $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
        $random-yoyo-y: $random-yoyo-time * 100vh;
        $random-scale: math.random(10000) * 0.0003;
        $fall-duration: random_range(10, 30) * 1s;
        $fall-delay: math.random(30) * -1s;
    
        &:nth-child(#{$i}) {
            opacity: math.random(10000) * 0.0001;
            transform: translate($random-x, -10px) scale($random-scale);
            animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
        }
    
        @keyframes fall-#{$i} {
            #{math.percentage($random-yoyo-time)} {
                transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
            }
    
            to {
                transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
            }
            }
        }
    } 


    // @media screen and (max-width: 700px) {
    //     .snow:nth-child(n + 11) {
    //         $total: 10;
    //     }
    // }
    </style>

