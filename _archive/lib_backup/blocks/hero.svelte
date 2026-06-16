<script>

</script>

<section>
    <div>
        <h1>OnePiece cardgame Collection</h1>
    </div>
    <img src="./images/luffy-gear-5hero.png" alt="hero banner" />
    <p>“This is a fan project. One Piece and all related content are owned by Eiichiro Oda, Shueisha, and Toei Animation. No copyright infringement intended.</p>
</section>

<style>
    section{
        width: 100%;
        position: relative;
    }

    section::before{
        @media(min-width: 768px) {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.6;
            z-index: 0;
        }
    }

    section div{
        --font: 'SuperSunday', jakarta, sans-serif;;
        z-index: 1;
        padding: 1rem 0;
        background-color: var(--background-dark);
        @media(min-width: 768px) {
            padding: var(--mini-gap) 1rem;
            border-radius: 0 0 20px 0;
            position: absolute;
        }
    }

    section div h1{
        font-family: var(--font);
        font-weight: 100;
        font-size: var(--svg-size-small);
        text-align: center;
        @media (min-width: 1024px) {
            font-size: var(--text-header);
        }
    }

    section img{
        display: none;
        @media(min-width: 768px){
            display: block;
            width: 100%;
        }
    }

    section > p{
        display: none;
        @media(min-width: 768px){
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            text-align: end;
            font-size: var(--text-small);
        }
        @media(min-width: 1024px){
            font-size: unset;
        }
    }
</style>

