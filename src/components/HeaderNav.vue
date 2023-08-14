<template>
    <header>
        <a href="/" class="navbar-brand">Foosball!</a>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/players">Players</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;

    top: 0;
    position: fixed;
    overflow: hidden;

    width: 100%;

    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);

    ul {
        display: flex;
        flex-direction: row;
    }


    a {
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.9);
        cursor: pointer;
        text-decoration-color: rgba(0, 0, 0, 0.9);
        text-decoration-line: none;
        text-decoration-style: solid;
        text-decoration-thickness: auto;
        line-height: 24px;
        display: block;
    }

    .navbar-brand {
        box-sizing: border-box;
        display: block;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        margin-right: 16px;
        padding: 0.3125rem 0.5rem;
        text-align: center;
        word-break: break-all;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
}
</style>
