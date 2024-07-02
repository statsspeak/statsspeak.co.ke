<script lang="ts">
	let classname: string;
	export { classname as class };

	function mapScrollIntoView(tagName: string) {
		return function (evt: Event) {
			evt.preventDefault();
			document?.querySelector(tagName)?.scrollIntoView({ behavior: 'smooth' });
		};
	}
</script>

<ul class={classname}>
	<a href="#top" on:click={mapScrollIntoView('#top')}>Home</a>
	<a href="#trusted-by" on:click={mapScrollIntoView('#trusted-by')}>About us</a>
	<a href="#our-services" on:click={mapScrollIntoView('#our-services')}>Our Services</a>
	<a href="/#" on:click={mapScrollIntoView('#our-team')}>Our Team</a>
</ul>
