<script>

</script>

<nav>
    <div>
        <img src="./images/githubpfp.png" alt="">
        <p>
            A fan Project made by J.L
        </p>
    </div>
</nav>
<nav>
    <div>
        <img src="./images/linkedIn.svg" alt="Jesse-L3 LinkedIn">
        <p>Jesse Leeuwerink</p>
    </div>
    <div>
        <img src="./images/github.svg" alt="Jesse-L3 GitHub">
        <p>Jesse-L3</p>
    </div>
</nav>

<style>
    nav{
        background-color: var(--primary-color);
        color: var(--text-light);
        height: 5.875em;
        padding: 23px 20px;
        display: flex; 
        width: 50%;
    }

    nav div{
        height: 100%;
    }

    nav:first-child{
        width: 20%;
        @media (min-width: 600px){
            width: 50%;
        }
    }

    nav:first-child div{
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    nav:first-child p{
        display: none;
        @media (min-width: 600px){
            display: block;
        }
    }


    nav:last-child{
        display: flex;
        justify-content: center;
        gap: 2em;
        width: 80%;

        @media (min-width: 600px){
            justify-content: flex-end; 
            width: 50%;       
        }
    }

    nav:last-child div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    

    nav img{
            aspect-ratio: 1/1;
            width: 50px;
    }

    nav img[src*=".svg"]{
        aspect-ratio: 1/1;
        width: 40px;
    }

    nav p{

        @media (min-width: 600px){
            font-size: var(--text-xs);
        }
    }
</style>