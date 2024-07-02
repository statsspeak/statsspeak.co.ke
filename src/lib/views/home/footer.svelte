<script lang="ts">
    import Linkedin from '$lib/components/svgs/linkedin.svg.svelte';
    import SSLogoSVG from '$lib/components/svgs/ss-logo-svg.svelte';
    import SectionScrollNav from './section-scroll-nav.svelte';

    let count = 0;

    function handleClick(event: MouseEvent) {
        count += 1;
        console.log('Button clicked, count:', count);
    }
</script>

<div class="inline-container footer-highlight">
    <h5>Transform Your Business with Insights</h5>
</div>
<div class="footer inline-container">
    <div class="footer-section pitch">
        <SSLogoSVG />
        <p>
            With a unique blend of data expertise and software craftsmanship, we are dedicated to
            empowering ambitious enterprises and driving their success
        </p>
    </div>
    <div class="footer-section">
        <h4>Contact</h4>
        <div class="footer-section-list">
            <div>+254715644881</div>
            <div>info @ statsspeak.co.ke</div>
            <div>10th Floor, Mercure, Upperhill, Nairobi</div>
            <button on:click={handleClick}>Click Me</button>
        </div>
    </div>
    <div class="footer-section">
        <h4>Company</h4>
        <SectionScrollNav class="footer-section-list" />
    </div>
    <div class="footer-section">
        <h4>Resources</h4>
    </div>
    <div class="footer-section socials">
        <h4>Our Socials</h4>
        <div>
            <a href="https://www.linkedin.com/company/statsspeak" target="_blank">
                <Linkedin />
            </a>
        </div>
    </div>
</div>
<div class="terms inline-container">
    <p style="margin-left: auto;">&copy; {new Date().getFullYear()} Statsspeak</p>
    <a href="/admin">Admin</a>
</div>

<style lang="scss">
    .footer-highlight {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 12px;
        background: linear-gradient(89.81deg, #00acc8 0.14%, #003759 98.85%);
        height: 72px;
        border-radius: 12px;

        & h5 {
            color: white;
        }
    }

    .footer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 24px;
        padding: 56px 0;
        margin: 56px auto;
        margin-bottom: 26px;
        border-top: 1px solid var(--gray-100);
        border-bottom: 1px solid var(--gray-100);

        & p {
            font-family: var(--font-family-secondary);
            color: var(--gray-400);
        }

        & h4 {
            font-size: 1.5rem;
        }
    }

    .pitch {
        display: grid;
        gap: 32px;

        & p {
            font-size: small;
        }
    }

    :global(.pitch svg) {
        width: 90px;
    }

    :global(.footer-section-list) {
        display: grid;
        gap: 18px;
        font-family: var(--font-family-secondary);
        color: var(--gray-400);
        padding-top: 24px;
    }

    :global(.footer-section-list a) {
        font-family: var(--font-family-secondary);
        color: var(--gray-400);
        text-decoration: none;
    }

    .terms {
        display: flex;
        font-family: var(--font-family-secondary);
        color: var(--gray-400);
        padding-bottom: 26px;
        gap: 12px;

        a {
            color: inherit;
            border-left: 1px solid gray;
            padding-left: 12px;
        }
    }


    /* Media Queries */
    @media (min-width: 320px) and (max-width: 480px){
        .footer {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px 0;
            margin: 24px auto;
            margin-bottom: 16px;
        }

        .footer-section {
            display: grid;
            gap: 16px;
        }

        .footer-section-list {
            gap: 8px;
        }

        .terms {
            padding-bottom: 16px;
        }
    }

    @media (min-width: 481px) and (max-width: 640px){
        .footer {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px 0;
            margin: 24px auto;
            margin-bottom: 16px;
        }

        .footer-section {
            display: grid;
            gap: 16px;
        }

        .footer-section-list {
            gap: 8px;
        }

        .terms {
            padding-bottom: 16px;
        }
    }
</style>
