<template>
    <div id="animation-sphere-container">
        <div class="container">
            <span v-for="n in sphereCount" :key="'animation-' + n"></span>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Sphere",
        data() {
            return {
                sphereCount: 100
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    #animation-sphere-container {
        .container {
            height: 20em;
            width: 20em;
            position: relative;
            transform-style: preserve-3d;
            animation: spin 10s linear infinite;
            -webkit-animation: spin 10s linear infinite;
            -moz-animation: spin 10s linear infinite;
        }

        .container span {
            width: 0.2em;
            height: 0.2em;
            border-radius: 100%;
            position: absolute;
            top: calc(50% - 10em / 100);
            left: calc(50% - 10em / 100);
            transform-style: preserve-3d;
        }

        .container span:nth-child(1) {
            transform: translate3d(0.18463em, 0.25412em, 9.99507em);
            -webkit-transform: translate3d(0.18463em, 0.25412em, 9.99507em);
            -moz-transform: translate3d(0.18463em, 0.25412em, 9.99507em);

            animation-delay: 10ms;
			-webkit-animation-delay: 10ms;
			-moz-animation-delay: 10ms;
        }

        .container span:nth-child(2) {
            transform: translate3d(-0.19403em, 0.59717em, 9.98027em);
            -webkit-transform: translate3d(-0.19403em, 0.59717em, 9.98027em);
            -moz-transform: translate3d(-0.19403em, 0.59717em, 9.98027em);

            animation-delay: 20ms;
			-webkit-animation-delay: 20ms;
			-moz-animation-delay: 20ms;
        }

        .container span:nth-child(3) {
            transform: translate3d(-0.89502em, 0.29081em, 9.95562em);
            -webkit-transform: translate3d(-0.89502em, 0.29081em, 9.95562em);
            -moz-transform: translate3d(-0.89502em, 0.29081em, 9.95562em);

            animation-delay: 30ms;
			-webkit-animation-delay: 30ms;
			-moz-animation-delay: 30ms;
        }

        .container span:nth-child(4) {
            transform: translate3d(-1.01397em, -0.73669em, 9.92115em);
            -webkit-transform: translate3d(-1.01397em, -0.73669em, 9.92115em);
            -moz-transform: translate3d(-1.01397em, -0.73669em, 9.92115em);

            animation-delay: 40ms;
			-webkit-animation-delay: 40ms;
			-moz-animation-delay: 40ms;
        }

        .container span:nth-child(5) {
            transform: translate3d(0em, -1.56434em, 9.87688em);
            -webkit-transform: translate3d(0em, -1.56434em, 9.87688em);
            -moz-transform: translate3d(0em, -1.56434em, 9.87688em);

            animation-delay: 50ms;
			-webkit-animation-delay: 50ms;
			-moz-animation-delay: 50ms;
        }

        .container span:nth-child(6) {
            transform: translate3d(1.51595em, -1.1014em, 9.82287em);
            -webkit-transform: translate3d(1.51595em, -1.1014em, 9.82287em);
            -moz-transform: translate3d(1.51595em, -1.1014em, 9.82287em);

            animation-delay: 60ms;
			-webkit-animation-delay: 60ms;
			-moz-animation-delay: 60ms;
        }

        .container span:nth-child(7) {
            transform: translate3d(2.07467em, 0.6741em, 9.75917em);
            -webkit-transform: translate3d(2.07467em, 0.6741em, 9.75917em);
            -moz-transform: translate3d(2.07467em, 0.6741em, 9.75917em);

            animation-delay: 70ms;
			-webkit-animation-delay: 70ms;
			-moz-animation-delay: 70ms;
        }

        .container span:nth-child(8) {
            transform: translate3d(0.76849em, 2.36518em, 9.68583em);
            -webkit-transform: translate3d(0.76849em, 2.36518em, 9.68583em);
            -moz-transform: translate3d(0.76849em, 2.36518em, 9.68583em);

            animation-delay: 80ms;
			-webkit-animation-delay: 80ms;
			-moz-animation-delay: 80ms;
        }

        .container span:nth-child(9) {
            transform: translate3d(-1.63987em, 2.25709em, 9.60294em);
            -webkit-transform: translate3d(-1.63987em, 2.25709em, 9.60294em);
            -moz-transform: translate3d(-1.63987em, 2.25709em, 9.60294em);

            animation-delay: 90ms;
			-webkit-animation-delay: 90ms;
			-moz-animation-delay: 90ms;
        }

        .container span:nth-child(10) {
            transform: translate3d(-3.09017em, 0em, 9.51057em);
            -webkit-transform: translate3d(-3.09017em, 0em, 9.51057em);
            -moz-transform: translate3d(-3.09017em, 0em, 9.51057em);

            animation-delay: 100ms;
			-webkit-animation-delay: 100ms;
			-moz-animation-delay: 100ms;
        }

        .container span:nth-child(11) {
            transform: translate3d(-1.99105em, -2.74045em, 9.40881em);
            -webkit-transform: translate3d(-1.99105em, -2.74045em, 9.40881em);
            -moz-transform: translate3d(-1.99105em, -2.74045em, 9.40881em);

            animation-delay: 110ms;
			-webkit-animation-delay: 110ms;
			-moz-animation-delay: 110ms;
        }

        .container span:nth-child(12) {
            transform: translate3d(1.13757em, -3.50107em, 9.29776em);
            -webkit-transform: translate3d(1.13757em, -3.50107em, 9.29776em);
            -moz-transform: translate3d(1.13757em, -3.50107em, 9.29776em);

            animation-delay: 120ms;
			-webkit-animation-delay: 120ms;
			-moz-animation-delay: 120ms;
        }

        .container span:nth-child(13) {
            transform: translate3d(3.7771em, -1.22725em, 9.17755em);
            -webkit-transform: translate3d(3.7771em, -1.22725em, 9.17755em);
            -moz-transform: translate3d(3.7771em, -1.22725em, 9.17755em);

            animation-delay: 130ms;
			-webkit-animation-delay: 130ms;
			-moz-animation-delay: 130ms;
        }

        .container span:nth-child(14) {
            transform: translate3d(3.44463em, 2.50267em, 9.04827em);
            -webkit-transform: translate3d(3.44463em, 2.50267em, 9.04827em);
            -moz-transform: translate3d(3.44463em, 2.50267em, 9.04827em);

            animation-delay: 140ms;
			-webkit-animation-delay: 140ms;
			-moz-animation-delay: 140ms;
        }

        .container span:nth-child(15) {
            transform: translate3d(0em, 4.5399em, 8.91007em);
            -webkit-transform: translate3d(0em, 4.5399em, 8.91007em);
            -moz-transform: translate3d(0em, 4.5399em, 8.91007em);

            animation-delay: 150ms;
			-webkit-animation-delay: 150ms;
			-moz-animation-delay: 150ms;
        }

        .container span:nth-child(16) {
            transform: translate3d(-3.89747em, 2.83168em, 8.76307em);
            -webkit-transform: translate3d(-3.89747em, 2.83168em, 8.76307em);
            -moz-transform: translate3d(-3.89747em, 2.83168em, 8.76307em);

            animation-delay: 160ms;
			-webkit-animation-delay: 160ms;
			-moz-animation-delay: 160ms;
        }

        .container span:nth-child(17) {
            transform: translate3d(-4.84127em, -1.57302em, 8.60742em);
            -webkit-transform: translate3d(-4.84127em, -1.57302em, 8.60742em);
            -moz-transform: translate3d(-4.84127em, -1.57302em, 8.60742em);

            animation-delay: 170ms;
			-webkit-animation-delay: 170ms;
			-moz-animation-delay: 170ms;
        }

        .container span:nth-child(18) {
            transform: translate3d(-1.6558em, -5.09602em, 8.44328em);
            -webkit-transform: translate3d(-1.6558em, -5.09602em, 8.44328em);
            -moz-transform: translate3d(-1.6558em, -5.09602em, 8.44328em);

            animation-delay: 180ms;
			-webkit-animation-delay: 180ms;
			-moz-animation-delay: 180ms;
        }

        .container span:nth-child(19) {
            transform: translate3d(3.30384em, -4.54735em, 8.27081em);
            -webkit-transform: translate3d(3.30384em, -4.54735em, 8.27081em);
            -moz-transform: translate3d(3.30384em, -4.54735em, 8.27081em);

            animation-delay: 190ms;
			-webkit-animation-delay: 190ms;
			-moz-animation-delay: 190ms;
        }

        .container span:nth-child(20) {
            transform: translate3d(5.87785em, 0em, 8.09017em);
            -webkit-transform: translate3d(5.87785em, 0em, 8.09017em);
            -moz-transform: translate3d(5.87785em, 0em, 8.09017em);

            animation-delay: 200ms;
			-webkit-animation-delay: 200ms;
			-moz-animation-delay: 200ms;
        }

        .container span:nth-child(21) {
            transform: translate3d(3.60258em, 4.95852em, 7.90155em);
            -webkit-transform: translate3d(3.60258em, 4.95852em, 7.90155em);
            -moz-transform: translate3d(3.60258em, 4.95852em, 7.90155em);

            animation-delay: 210ms;
			-webkit-animation-delay: 210ms;
			-moz-animation-delay: 210ms;
        }

        .container span:nth-child(22) {
            transform: translate3d(-1.96975em, 6.06226em, 7.70513em);
            -webkit-transform: translate3d(-1.96975em, 6.06226em, 7.70513em);
            -moz-transform: translate3d(-1.96975em, 6.06226em, 7.70513em);

            animation-delay: 220ms;
			-webkit-animation-delay: 220ms;
			-moz-animation-delay: 220ms;
        }

        .container span:nth-child(23) {
            transform: translate3d(-6.28945em, 2.04357em, 7.50111em);
            -webkit-transform: translate3d(-6.28945em, 2.04357em, 7.50111em);
            -moz-transform: translate3d(-6.28945em, 2.04357em, 7.50111em);

            animation-delay: 230ms;
			-webkit-animation-delay: 230ms;
			-moz-animation-delay: 230ms;
        }

        .container span:nth-child(24) {
            transform: translate3d(-5.5381em, -4.02367em, 7.28969em);
            -webkit-transform: translate3d(-5.5381em, -4.02367em, 7.28969em);
            -moz-transform: translate3d(-5.5381em, -4.02367em, 7.28969em);

            animation-delay: 240ms;
			-webkit-animation-delay: 240ms;
			-moz-animation-delay: 240ms;
        }

        .container span:nth-child(25) {
            transform: translate3d(0em, -7.07107em, 7.07107em);
            -webkit-transform: translate3d(0em, -7.07107em, 7.07107em);
            -moz-transform: translate3d(0em, -7.07107em, 7.07107em);

            animation-delay: 250ms;
			-webkit-animation-delay: 250ms;
			-moz-animation-delay: 250ms;
        }

        .container span:nth-child(26) {
            transform: translate3d(5.89748em, -4.28477em, 6.84547em);
            -webkit-transform: translate3d(5.89748em, -4.28477em, 6.84547em);
            -moz-transform: translate3d(5.89748em, -4.28477em, 6.84547em);

            animation-delay: 260ms;
			-webkit-animation-delay: 260ms;
			-moz-animation-delay: 260ms;
        }

        .container span:nth-child(27) {
            transform: translate3d(7.13398em, 2.31797em, 6.61312em);
            -webkit-transform: translate3d(7.13398em, 2.31797em, 6.61312em);
            -moz-transform: translate3d(7.13398em, 2.31797em, 6.61312em);

            animation-delay: 270ms;
			-webkit-animation-delay: 270ms;
			-moz-animation-delay: 270ms;
        }

        .container span:nth-child(28) {
            transform: translate3d(2.38102em, 7.32802em, 6.37424em);
            -webkit-transform: translate3d(2.38102em, 7.32802em, 6.37424em);
            -moz-transform: translate3d(2.38102em, 7.32802em, 6.37424em);

            animation-delay: 280ms;
			-webkit-animation-delay: 280ms;
			-moz-animation-delay: 280ms;
        }

        .container span:nth-child(29) {
            transform: translate3d(-4.64441em, 6.39249em, 6.12907em);
            -webkit-transform: translate3d(-4.64441em, 6.39249em, 6.12907em);
            -moz-transform: translate3d(-4.64441em, 6.39249em, 6.12907em);

            animation-delay: 290ms;
			-webkit-animation-delay: 290ms;
			-moz-animation-delay: 290ms;
        }

        .container span:nth-child(30) {
            transform: translate3d(-8.09017em, 0em, 5.87785em);
            -webkit-transform: translate3d(-8.09017em, 0em, 5.87785em);
            -moz-transform: translate3d(-8.09017em, 0em, 5.87785em);

            animation-delay: 300ms;
			-webkit-animation-delay: 300ms;
			-moz-animation-delay: 300ms;
        }

        .container span:nth-child(31) {
            transform: translate3d(-4.86146em, -6.69122em, 5.62083em);
            -webkit-transform: translate3d(-4.86146em, -6.69122em, 5.62083em);
            -moz-transform: translate3d(-4.86146em, -6.69122em, 5.62083em);

            animation-delay: 310ms;
			-webkit-animation-delay: 310ms;
			-moz-animation-delay: 310ms;
        }

        .container span:nth-child(32) {
            transform: translate3d(2.60912em, -8.03004em, 5.35827em);
            -webkit-transform: translate3d(2.60912em, -8.03004em, 5.35827em);
            -moz-transform: translate3d(2.60912em, -8.03004em, 5.35827em);

            animation-delay: 320ms;
			-webkit-animation-delay: 320ms;
			-moz-animation-delay: 320ms;
        }

        .container span:nth-child(33) {
            transform: translate3d(8.18614em, -2.65984em, 5.09041em);
            -webkit-transform: translate3d(8.18614em, -2.65984em, 5.09041em);
            -moz-transform: translate3d(8.18614em, -2.65984em, 5.09041em);

            animation-delay: 330ms;
			-webkit-animation-delay: 330ms;
			-moz-animation-delay: 330ms;
        }

        .container span:nth-child(34) {
            transform: translate3d(7.08947em, 5.1508em, 4.81754em);
            -webkit-transform: translate3d(7.08947em, 5.1508em, 4.81754em);
            -moz-transform: translate3d(7.08947em, 5.1508em, 4.81754em);

            animation-delay: 340ms;
			-webkit-animation-delay: 340ms;
			-moz-animation-delay: 340ms;
        }

        .container span:nth-child(35) {
            transform: translate3d(0em, 8.91007em, 4.5399em);
            -webkit-transform: translate3d(0em, 8.91007em, 4.5399em);
            -moz-transform: translate3d(0em, 8.91007em, 4.5399em);

            animation-delay: 350ms;
			-webkit-animation-delay: 350ms;
			-moz-animation-delay: 350ms;
        }

        .container span:nth-child(36) {
            transform: translate3d(-7.3202em, 5.31844em, 4.25779em);
            -webkit-transform: translate3d(-7.3202em, 5.31844em, 4.25779em);
            -moz-transform: translate3d(-7.3202em, 5.31844em, 4.25779em);

            animation-delay: 360ms;
			-webkit-animation-delay: 360ms;
			-moz-animation-delay: 360ms;
        }

        .container span:nth-child(37) {
            transform: translate3d(-8.72837em, -2.83602em, 3.97148em);
            -webkit-transform: translate3d(-8.72837em, -2.83602em, 3.97148em);
            -moz-transform: translate3d(-8.72837em, -2.83602em, 3.97148em);

            animation-delay: 370ms;
			-webkit-animation-delay: 370ms;
			-moz-animation-delay: 370ms;
        }

        .container span:nth-child(38) {
            transform: translate3d(-2.87317em, -8.8427em, 3.68125em);
            -webkit-transform: translate3d(-2.87317em, -8.8427em, 3.68125em);
            -moz-transform: translate3d(-2.87317em, -8.8427em, 3.68125em);

            animation-delay: 380ms;
			-webkit-animation-delay: 380ms;
			-moz-animation-delay: 380ms;
        }

        .container span:nth-child(39) {
            transform: translate3d(5.53036em, -7.61189em, 3.38738em);
            -webkit-transform: translate3d(5.53036em, -7.61189em, 3.38738em);
            -moz-transform: translate3d(5.53036em, -7.61189em, 3.38738em);

            animation-delay: 390ms;
			-webkit-animation-delay: 390ms;
			-moz-animation-delay: 390ms;
        }

        .container span:nth-child(40) {
            transform: translate3d(9.51057em, 0em, 3.09017em);
            -webkit-transform: translate3d(9.51057em, 0em, 3.09017em);
            -moz-transform: translate3d(9.51057em, 0em, 3.09017em);

            animation-delay: 400ms;
			-webkit-animation-delay: 400ms;
			-moz-animation-delay: 400ms;
        }

        .container span:nth-child(41) {
            transform: translate3d(5.64446em, 7.76894em, 2.78991em);
            -webkit-transform: translate3d(5.64446em, 7.76894em, 2.78991em);
            -moz-transform: translate3d(5.64446em, 7.76894em, 2.78991em);

            animation-delay: 410ms;
			-webkit-animation-delay: 410ms;
			-moz-animation-delay: 410ms;
        }

        .container span:nth-child(42) {
            transform: translate3d(-2.99309em, 9.21177em, 2.4869em);
            -webkit-transform: translate3d(-2.99309em, 9.21177em, 2.4869em);
            -moz-transform: translate3d(-2.99309em, 9.21177em, 2.4869em);

            animation-delay: 420ms;
			-webkit-animation-delay: 420ms;
			-moz-animation-delay: 420ms;
        }

        .container span:nth-child(43) {
            transform: translate3d(-9.28152em, 3.01575em, 2.18143em);
            -webkit-transform: translate3d(-9.28152em, 3.01575em, 2.18143em);
            -moz-transform: translate3d(-9.28152em, 3.01575em, 2.18143em);

            animation-delay: 430ms;
			-webkit-animation-delay: 430ms;
			-moz-animation-delay: 430ms;
        }

        .container span:nth-child(44) {
            transform: translate3d(-7.94687em, -5.77374em, 1.87381em);
            -webkit-transform: translate3d(-7.94687em, -5.77374em, 1.87381em);
            -moz-transform: translate3d(-7.94687em, -5.77374em, 1.87381em);

            animation-delay: 440ms;
			-webkit-animation-delay: 440ms;
			-moz-animation-delay: 440ms;
        }

        .container span:nth-child(45) {
            transform: translate3d(0em, -9.87688em, 1.56434em);
            -webkit-transform: translate3d(0em, -9.87688em, 1.56434em);
            -moz-transform: translate3d(0em, -9.87688em, 1.56434em);

            animation-delay: 450ms;
			-webkit-animation-delay: 450ms;
			-moz-animation-delay: 450ms;
        }

        .container span:nth-child(46) {
            transform: translate3d(8.02638em, -5.8315em, 1.25333em);
            -webkit-transform: translate3d(8.02638em, -5.8315em, 1.25333em);
            -moz-transform: translate3d(8.02638em, -5.8315em, 1.25333em);

            animation-delay: 460ms;
			-webkit-animation-delay: 460ms;
			-moz-animation-delay: 460ms;
        }

        .container span:nth-child(47) {
            transform: translate3d(9.46836em, 3.07646em, 0.94108em);
            -webkit-transform: translate3d(9.46836em, 3.07646em, 0.94108em);
            -moz-transform: translate3d(9.46836em, 3.07646em, 0.94108em);

            animation-delay: 470ms;
			-webkit-animation-delay: 470ms;
			-moz-animation-delay: 470ms;
        }

        .container span:nth-child(48) {
            transform: translate3d(3.08407em, 9.4918em, 0.62791em);
            -webkit-transform: translate3d(3.08407em, 9.4918em, 0.62791em);
            -moz-transform: translate3d(3.08407em, 9.4918em, 0.62791em);

            animation-delay: 480ms;
			-webkit-animation-delay: 480ms;
			-moz-animation-delay: 480ms;
        }

        .container span:nth-child(49) {
            transform: translate3d(-5.87495em, 8.08618em, 0.31411em);
            -webkit-transform: translate3d(-5.87495em, 8.08618em, 0.31411em);
            -moz-transform: translate3d(-5.87495em, 8.08618em, 0.31411em);

            animation-delay: 490ms;
			-webkit-animation-delay: 490ms;
			-moz-animation-delay: 490ms;
        }

        .container span:nth-child(50) {
            transform: translate3d(-10em, 0em, 0em);
            -webkit-transform: translate3d(-10em, 0em, 0em);
            -moz-transform: translate3d(-10em, 0em, 0em);

            animation-delay: 500ms;
			-webkit-animation-delay: 500ms;
			-moz-animation-delay: 500ms;
        }

        .container span:nth-child(51) {
            transform: translate3d(-5.87495em, -8.08618em, -0.31411em);
            -webkit-transform: translate3d(-5.87495em, -8.08618em, -0.31411em);
            -moz-transform: translate3d(-5.87495em, -8.08618em, -0.31411em);

            animation-delay: 510ms;
			-webkit-animation-delay: 510ms;
			-moz-animation-delay: 510ms;
        }

        .container span:nth-child(52) {
            transform: translate3d(3.08407em, -9.4918em, -0.62791em);
            -webkit-transform: translate3d(3.08407em, -9.4918em, -0.62791em);
            -moz-transform: translate3d(3.08407em, -9.4918em, -0.62791em);

            animation-delay: 520ms;
			-webkit-animation-delay: 520ms;
			-moz-animation-delay: 520ms;
        }

        .container span:nth-child(53) {
            transform: translate3d(9.46836em, -3.07646em, -0.94108em);
            -webkit-transform: translate3d(9.46836em, -3.07646em, -0.94108em);
            -moz-transform: translate3d(9.46836em, -3.07646em, -0.94108em);

            animation-delay: 530ms;
			-webkit-animation-delay: 530ms;
			-moz-animation-delay: 530ms;
        }

        .container span:nth-child(54) {
            transform: translate3d(8.02638em, 5.8315em, -1.25333em);
            -webkit-transform: translate3d(8.02638em, 5.8315em, -1.25333em);
            -moz-transform: translate3d(8.02638em, 5.8315em, -1.25333em);

            animation-delay: 540ms;
			-webkit-animation-delay: 540ms;
			-moz-animation-delay: 540ms;
        }

        .container span:nth-child(55) {
            transform: translate3d(0em, 9.87688em, -1.56434em);
            -webkit-transform: translate3d(0em, 9.87688em, -1.56434em);
            -moz-transform: translate3d(0em, 9.87688em, -1.56434em);

            animation-delay: 550ms;
			-webkit-animation-delay: 550ms;
			-moz-animation-delay: 550ms;
        }

        .container span:nth-child(56) {
            transform: translate3d(-7.94687em, 5.77374em, -1.87381em);
            -webkit-transform: translate3d(-7.94687em, 5.77374em, -1.87381em);
            -moz-transform: translate3d(-7.94687em, 5.77374em, -1.87381em);

            animation-delay: 560ms;
			-webkit-animation-delay: 560ms;
			-moz-animation-delay: 560ms;
        }

        .container span:nth-child(57) {
            transform: translate3d(-9.28152em, -3.01575em, -2.18143em);
            -webkit-transform: translate3d(-9.28152em, -3.01575em, -2.18143em);
            -moz-transform: translate3d(-9.28152em, -3.01575em, -2.18143em);

            animation-delay: 570ms;
			-webkit-animation-delay: 570ms;
			-moz-animation-delay: 570ms;
        }

        .container span:nth-child(58) {
            transform: translate3d(-2.99309em, -9.21177em, -2.4869em);
            -webkit-transform: translate3d(-2.99309em, -9.21177em, -2.4869em);
            -moz-transform: translate3d(-2.99309em, -9.21177em, -2.4869em);

            animation-delay: 580ms;
			-webkit-animation-delay: 580ms;
			-moz-animation-delay: 580ms;
        }

        .container span:nth-child(59) {
            transform: translate3d(5.64446em, -7.76894em, -2.78991em);
            -webkit-transform: translate3d(5.64446em, -7.76894em, -2.78991em);
            -moz-transform: translate3d(5.64446em, -7.76894em, -2.78991em);

            animation-delay: 590ms;
			-webkit-animation-delay: 590ms;
			-moz-animation-delay: 590ms;
        }

        .container span:nth-child(60) {
            transform: translate3d(9.51057em, 0em, -3.09017em);
            -webkit-transform: translate3d(9.51057em, 0em, -3.09017em);
            -moz-transform: translate3d(9.51057em, 0em, -3.09017em);

            animation-delay: 600ms;
			-webkit-animation-delay: 600ms;
			-moz-animation-delay: 600ms;
        }

        .container span:nth-child(61) {
            transform: translate3d(5.53036em, 7.61189em, -3.38738em);
            -webkit-transform: translate3d(5.53036em, 7.61189em, -3.38738em);
            -moz-transform: translate3d(5.53036em, 7.61189em, -3.38738em);

            animation-delay: 610ms;
			-webkit-animation-delay: 610ms;
			-moz-animation-delay: 610ms;
        }

        .container span:nth-child(62) {
            transform: translate3d(-2.87317em, 8.8427em, -3.68125em);
            -webkit-transform: translate3d(-2.87317em, 8.8427em, -3.68125em);
            -moz-transform: translate3d(-2.87317em, 8.8427em, -3.68125em);

            animation-delay: 620ms;
			-webkit-animation-delay: 620ms;
			-moz-animation-delay: 620ms;
        }

        .container span:nth-child(63) {
            transform: translate3d(-8.72837em, 2.83602em, -3.97148em);
            -webkit-transform: translate3d(-8.72837em, 2.83602em, -3.97148em);
            -moz-transform: translate3d(-8.72837em, 2.83602em, -3.97148em);

            animation-delay: 630ms;
			-webkit-animation-delay: 630ms;
			-moz-animation-delay: 630ms;
        }

        .container span:nth-child(64) {
            transform: translate3d(-7.3202em, -5.31844em, -4.25779em);
            -webkit-transform: translate3d(-7.3202em, -5.31844em, -4.25779em);
            -moz-transform: translate3d(-7.3202em, -5.31844em, -4.25779em);

            animation-delay: 640ms;
			-webkit-animation-delay: 640ms;
			-moz-animation-delay: 640ms;
        }

        .container span:nth-child(65) {
            transform: translate3d(0em, -8.91007em, -4.5399em);
            -webkit-transform: translate3d(0em, -8.91007em, -4.5399em);
            -moz-transform: translate3d(0em, -8.91007em, -4.5399em);

            animation-delay: 650ms;
			-webkit-animation-delay: 650ms;
			-moz-animation-delay: 650ms;
        }

        .container span:nth-child(66) {
            transform: translate3d(7.08947em, -5.1508em, -4.81754em);
            -webkit-transform: translate3d(7.08947em, -5.1508em, -4.81754em);
            -moz-transform: translate3d(7.08947em, -5.1508em, -4.81754em);

            animation-delay: 660ms;
			-webkit-animation-delay: 660ms;
			-moz-animation-delay: 660ms;
        }

        .container span:nth-child(67) {
            transform: translate3d(8.18614em, 2.65984em, -5.09041em);
            -webkit-transform: translate3d(8.18614em, 2.65984em, -5.09041em);
            -moz-transform: translate3d(8.18614em, 2.65984em, -5.09041em);

            animation-delay: 670ms;
			-webkit-animation-delay: 670ms;
			-moz-animation-delay: 670ms;
        }

        .container span:nth-child(68) {
            transform: translate3d(2.60912em, 8.03004em, -5.35827em);
            -webkit-transform: translate3d(2.60912em, 8.03004em, -5.35827em);
            -moz-transform: translate3d(2.60912em, 8.03004em, -5.35827em);

            animation-delay: 680ms;
			-webkit-animation-delay: 680ms;
			-moz-animation-delay: 680ms;
        }

        .container span:nth-child(69) {
            transform: translate3d(-4.86146em, 6.69122em, -5.62083em);
            -webkit-transform: translate3d(-4.86146em, 6.69122em, -5.62083em);
            -moz-transform: translate3d(-4.86146em, 6.69122em, -5.62083em);

            animation-delay: 690ms;
			-webkit-animation-delay: 690ms;
			-moz-animation-delay: 690ms;
        }

        .container span:nth-child(70) {
            transform: translate3d(-8.09017em, 0em, -5.87785em);
            -webkit-transform: translate3d(-8.09017em, 0em, -5.87785em);
            -moz-transform: translate3d(-8.09017em, 0em, -5.87785em);

            animation-delay: 700ms;
			-webkit-animation-delay: 700ms;
			-moz-animation-delay: 700ms;
        }

        .container span:nth-child(71) {
            transform: translate3d(-4.64441em, -6.39249em, -6.12907em);
            -webkit-transform: translate3d(-4.64441em, -6.39249em, -6.12907em);
            -moz-transform: translate3d(-4.64441em, -6.39249em, -6.12907em);

            animation-delay: 710ms;
			-webkit-animation-delay: 710ms;
			-moz-animation-delay: 710ms;
        }

        .container span:nth-child(72) {
            transform: translate3d(2.38102em, -7.32802em, -6.37424em);
            -webkit-transform: translate3d(2.38102em, -7.32802em, -6.37424em);
            -moz-transform: translate3d(2.38102em, -7.32802em, -6.37424em);

            animation-delay: 720ms;
			-webkit-animation-delay: 720ms;
			-moz-animation-delay: 720ms;
        }

        .container span:nth-child(73) {
            transform: translate3d(7.13398em, -2.31797em, -6.61312em);
            -webkit-transform: translate3d(7.13398em, -2.31797em, -6.61312em);
            -moz-transform: translate3d(7.13398em, -2.31797em, -6.61312em);

            animation-delay: 730ms;
			-webkit-animation-delay: 730ms;
			-moz-animation-delay: 730ms;
        }

        .container span:nth-child(74) {
            transform: translate3d(5.89748em, 4.28477em, -6.84547em);
            -webkit-transform: translate3d(5.89748em, 4.28477em, -6.84547em);
            -moz-transform: translate3d(5.89748em, 4.28477em, -6.84547em);

            animation-delay: 740ms;
			-webkit-animation-delay: 740ms;
			-moz-animation-delay: 740ms;
        }

        .container span:nth-child(75) {
            transform: translate3d(0em, 7.07107em, -7.07107em);
            -webkit-transform: translate3d(0em, 7.07107em, -7.07107em);
            -moz-transform: translate3d(0em, 7.07107em, -7.07107em);

            animation-delay: 750ms;
			-webkit-animation-delay: 750ms;
			-moz-animation-delay: 750ms;
        }

        .container span:nth-child(76) {
            transform: translate3d(-5.5381em, 4.02367em, -7.28969em);
            -webkit-transform: translate3d(-5.5381em, 4.02367em, -7.28969em);
            -moz-transform: translate3d(-5.5381em, 4.02367em, -7.28969em);

            animation-delay: 760ms;
			-webkit-animation-delay: 760ms;
			-moz-animation-delay: 760ms;
        }

        .container span:nth-child(77) {
            transform: translate3d(-6.28945em, -2.04357em, -7.50111em);
            -webkit-transform: translate3d(-6.28945em, -2.04357em, -7.50111em);
            -moz-transform: translate3d(-6.28945em, -2.04357em, -7.50111em);

            animation-delay: 770ms;
			-webkit-animation-delay: 770ms;
			-moz-animation-delay: 770ms;
        }

        .container span:nth-child(78) {
            transform: translate3d(-1.96975em, -6.06226em, -7.70513em);
            -webkit-transform: translate3d(-1.96975em, -6.06226em, -7.70513em);
            -moz-transform: translate3d(-1.96975em, -6.06226em, -7.70513em);

            animation-delay: 780ms;
			-webkit-animation-delay: 780ms;
			-moz-animation-delay: 780ms;
        }

        .container span:nth-child(79) {
            transform: translate3d(3.60258em, -4.95852em, -7.90155em);
            -webkit-transform: translate3d(3.60258em, -4.95852em, -7.90155em);
            -moz-transform: translate3d(3.60258em, -4.95852em, -7.90155em);

            animation-delay: 790ms;
			-webkit-animation-delay: 790ms;
			-moz-animation-delay: 790ms;
        }

        .container span:nth-child(80) {
            transform: translate3d(5.87785em, 0em, -8.09017em);
            -webkit-transform: translate3d(5.87785em, 0em, -8.09017em);
            -moz-transform: translate3d(5.87785em, 0em, -8.09017em);

            animation-delay: 800ms;
			-webkit-animation-delay: 800ms;
			-moz-animation-delay: 800ms;
        }

        .container span:nth-child(81) {
            transform: translate3d(3.30384em, 4.54735em, -8.27081em);
            -webkit-transform: translate3d(3.30384em, 4.54735em, -8.27081em);
            -moz-transform: translate3d(3.30384em, 4.54735em, -8.27081em);

            animation-delay: 810ms;
			-webkit-animation-delay: 810ms;
			-moz-animation-delay: 810ms;
        }

        .container span:nth-child(82) {
            transform: translate3d(-1.6558em, 5.09602em, -8.44328em);
            -webkit-transform: translate3d(-1.6558em, 5.09602em, -8.44328em);
            -moz-transform: translate3d(-1.6558em, 5.09602em, -8.44328em);

            animation-delay: 820ms;
			-webkit-animation-delay: 820ms;
			-moz-animation-delay: 820ms;
        }

        .container span:nth-child(83) {
            transform: translate3d(-4.84127em, 1.57302em, -8.60742em);
            -webkit-transform: translate3d(-4.84127em, 1.57302em, -8.60742em);
            -moz-transform: translate3d(-4.84127em, 1.57302em, -8.60742em);

            animation-delay: 830ms;
			-webkit-animation-delay: 830ms;
			-moz-animation-delay: 830ms;
        }

        .container span:nth-child(84) {
            transform: translate3d(-3.89747em, -2.83168em, -8.76307em);
            -webkit-transform: translate3d(-3.89747em, -2.83168em, -8.76307em);
            -moz-transform: translate3d(-3.89747em, -2.83168em, -8.76307em);

            animation-delay: 840ms;
			-webkit-animation-delay: 840ms;
			-moz-animation-delay: 840ms;
        }

        .container span:nth-child(85) {
            transform: translate3d(0em, -4.5399em, -8.91007em);
            -webkit-transform: translate3d(0em, -4.5399em, -8.91007em);
            -moz-transform: translate3d(0em, -4.5399em, -8.91007em);

            animation-delay: 850ms;
			-webkit-animation-delay: 850ms;
			-moz-animation-delay: 850ms;
        }

        .container span:nth-child(86) {
            transform: translate3d(3.44463em, -2.50267em, -9.04827em);
            -webkit-transform: translate3d(3.44463em, -2.50267em, -9.04827em);
            -moz-transform: translate3d(3.44463em, -2.50267em, -9.04827em);

            animation-delay: 860ms;
			-webkit-animation-delay: 860ms;
			-moz-animation-delay: 860ms;
        }

        .container span:nth-child(87) {
            transform: translate3d(3.7771em, 1.22725em, -9.17755em);
            -webkit-transform: translate3d(3.7771em, 1.22725em, -9.17755em);
            -moz-transform: translate3d(3.7771em, 1.22725em, -9.17755em);

            animation-delay: 870ms;
			-webkit-animation-delay: 870ms;
			-moz-animation-delay: 870ms;
        }

        .container span:nth-child(88) {
            transform: translate3d(1.13757em, 3.50107em, -9.29776em);
            -webkit-transform: translate3d(1.13757em, 3.50107em, -9.29776em);
            -moz-transform: translate3d(1.13757em, 3.50107em, -9.29776em);

            animation-delay: 880ms;
			-webkit-animation-delay: 880ms;
			-moz-animation-delay: 880ms;
        }

        .container span:nth-child(89) {
            transform: translate3d(-1.99105em, 2.74045em, -9.40881em);
            -webkit-transform: translate3d(-1.99105em, 2.74045em, -9.40881em);
            -moz-transform: translate3d(-1.99105em, 2.74045em, -9.40881em);

            animation-delay: 890ms;
			-webkit-animation-delay: 890ms;
			-moz-animation-delay: 890ms;
        }

        .container span:nth-child(90) {
            transform: translate3d(-3.09017em, 0em, -9.51057em);
            -webkit-transform: translate3d(-3.09017em, 0em, -9.51057em);
            -moz-transform: translate3d(-3.09017em, 0em, -9.51057em);

            animation-delay: 900ms;
			-webkit-animation-delay: 900ms;
			-moz-animation-delay: 900ms;
        }

        .container span:nth-child(91) {
            transform: translate3d(-1.63987em, -2.25709em, -9.60294em);
            -webkit-transform: translate3d(-1.63987em, -2.25709em, -9.60294em);
            -moz-transform: translate3d(-1.63987em, -2.25709em, -9.60294em);

            animation-delay: 910ms;
			-webkit-animation-delay: 910ms;
			-moz-animation-delay: 910ms;
        }

        .container span:nth-child(92) {
            transform: translate3d(0.76849em, -2.36518em, -9.68583em);
            -webkit-transform: translate3d(0.76849em, -2.36518em, -9.68583em);
            -moz-transform: translate3d(0.76849em, -2.36518em, -9.68583em);

            animation-delay: 920ms;
			-webkit-animation-delay: 920ms;
			-moz-animation-delay: 920ms;
        }

        .container span:nth-child(93) {
            transform: translate3d(2.07467em, -0.6741em, -9.75917em);
            -webkit-transform: translate3d(2.07467em, -0.6741em, -9.75917em);
            -moz-transform: translate3d(2.07467em, -0.6741em, -9.75917em);

            animation-delay: 930ms;
			-webkit-animation-delay: 930ms;
			-moz-animation-delay: 930ms;
        }

        .container span:nth-child(94) {
            transform: translate3d(1.51595em, 1.1014em, -9.82287em);
            -webkit-transform: translate3d(1.51595em, 1.1014em, -9.82287em);
            -moz-transform: translate3d(1.51595em, 1.1014em, -9.82287em);

            animation-delay: 940ms;
			-webkit-animation-delay: 940ms;
			-moz-animation-delay: 940ms;
        }

        .container span:nth-child(95) {
            transform: translate3d(0em, 1.56434em, -9.87688em);
            -webkit-transform: translate3d(0em, 1.56434em, -9.87688em);
            -moz-transform: translate3d(0em, 1.56434em, -9.87688em);

            animation-delay: 950ms;
			-webkit-animation-delay: 950ms;
			-moz-animation-delay: 950ms;
        }

        .container span:nth-child(96) {
            transform: translate3d(-1.01397em, 0.73669em, -9.92115em);
            -webkit-transform: translate3d(-1.01397em, 0.73669em, -9.92115em);
            -moz-transform: translate3d(-1.01397em, 0.73669em, -9.92115em);

            animation-delay: 960ms;
			-webkit-animation-delay: 960ms;
			-moz-animation-delay: 960ms;
        }

        .container span:nth-child(97) {
            transform: translate3d(-0.89502em, -0.29081em, -9.95562em);
            -webkit-transform: translate3d(-0.89502em, -0.29081em, -9.95562em);
            -moz-transform: translate3d(-0.89502em, -0.29081em, -9.95562em);

            animation-delay: 970ms;
			-webkit-animation-delay: 970ms;
			-moz-animation-delay: 970ms;
        }

        .container span:nth-child(98) {
            transform: translate3d(-0.19403em, -0.59717em, -9.98027em);
            -webkit-transform: translate3d(-0.19403em, -0.59717em, -9.98027em);
            -moz-transform: translate3d(-0.19403em, -0.59717em, -9.98027em);

            animation-delay: 980ms;
			-webkit-animation-delay: 980ms;
			-moz-animation-delay: 980ms;
        }

        .container span:nth-child(99) {
            transform: translate3d(0.18463em, -0.25412em, -9.99507em);
            -webkit-transform: translate3d(0.18463em, -0.25412em, -9.99507em);
            -moz-transform: translate3d(0.18463em, -0.25412em, -9.99507em);

            animation-delay: 990ms;
			-webkit-animation-delay: 990ms;
			-moz-animation-delay: 990ms;
        }

        .container span:nth-child(100) {
            transform: translate3d(0em, 0em, -10em);
            -webkit-transform: translate3d(0em, 0em, -10em);
            -moz-transform: translate3d(0em, 0em, -10em);

            animation-delay: 1000ms;
			-webkit-animation-delay: 1000ms;
			-moz-animation-delay: 1000ms;
        }

        .container span::before {
            content: "";
            display: block;
            border-radius: 100%;
            background-color: #161616;
            width: 0.2em;
            height: 0.2em;
            animation: spin 10s linear reverse infinite;
            -webkit-animation: spin 10s linear reverse infinite;
            -moz-animation: spin 10s linear reverse infinite;
        }

        @keyframes spin {
            0% {
                transform: rotateY(0);
                -webkit-transform: rotateY(0);
                -moz-transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
                -webkit-transform: rotateY(360deg);
                -moz-transform: rotateY(360deg);
            }
        }

        @-webkit-keyframes spin {
            0% {
                transform: rotateY(0);
                -webkit-transform: rotateY(0);
                -moz-transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
                -webkit-transform: rotateY(360deg);
                -moz-transform: rotateY(360deg);
            }
        }

        @-moz-keyframes spin {
            0% {
                transform: rotateY(0);
                -webkit-transform: rotateY(0);
                -moz-transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
                -webkit-transform: rotateY(360deg);
                -moz-transform: rotateY(360deg);
            }
        }
    }
</style>