<script>
  // Import necessary Svelte features
  import { onMount } from 'svelte';
  
  // Define a variable to hold the number of items in the array
  let numPrompts = 4;

  // Define an array to hold items for mapping
  let prompts = [];

const promptQ = [
  { question: "What is your softer digital future?", quote: "We are building a future where we can have the broad range we deserve. We refuse to shrink ourselves, refuse to fit. Fluid, insistent, we refuse to stand still: we slip, we slide. - Legacy Russell, Glitch Feminism"},
  { question: "What have we lost in the overproduction of the digital? What has been erased from your Internet? Who is the curator, if not you?", quote:"How do people disappear in an age of total over-visibility?...most important things want to remain invisible. Love is invisible. War is invisible. Capital is invisible. - Hito Steyerl, How Not To Be Seen: A Fucking Didactic Educational Installation "   
   },
  { question: "What do you gather online? How do you gather online? What alternatives are we writing through digital acts of maintenance, repair, archiving, etc.?", quote: "Gathering is the tender and thoughtful collection of goods for your kin, and a moment for reunion, for celebration, and for introspection around those goods. - Mindy Seu, On Gathering" },
  { question: "What does proximity look like on your Internet? Describe the shape of your Internet.", quote: "If artists have a role to play, perhaps it's to put a little friction back into this seamless dystopia in hopes of a more intimate, communal, and thoughtful web. - Gary Zhexing Zhang, Reenvisioning the Internet"}
];

  // Function to initialize the items array
  onMount(() => {
    prompts = Array.from({ length: numPrompts }, (_, i) => i);
  });
</script>

<div class="flex flex-col md:flex-row text-red md:h-svh">
	<section class="w-full md:w-1/2 h-full pr-12 relative">
		<div>
			<p class="text-2xl mb-12 mt-0">
				onoffon radio is an online micro-radio that narrowcasts within this space. Handmade with free (libre) open-source software and hosted on a Raspberry Pi, this radio is a starting point to begin imaging technological creation apart from industrial hands. What happens when we begin to build alternative media infrastructures by and for ourselves? 
			</p>
			<p class="text-sm font-serif">
				To participate:
			</p>
			<p class="text-2xl mb-4">
				Read out the question. Share your thoughts. Take your time. <br>
				The prompts are just a guide. Feel free to share anything you want.  
			</p>
			<p class="text-sm font-serif max-w-[48ch]">
				Note: This session is being recorded and may be used by onoffon radio or Softer London for event documentation. The recording is stored locally on this Raspberry Pi and will remain anonymous. 
			</p>
		</div>
		<div class="fixed bottom-1/2 right-0 md:bottom-4 md:left-4 z-[50] w-32 h-32 lg:w-60 lg:h-60 rounded-full border border-cream inline-flex items-center justify-center bg-red text-white text-lg md:text-3xl">
			<div class="animate-spin-slow">
				ON AIR
			</div>
		</div>
	</section>

	<section class="h-full w-full md:w-1/2">	
		<div class="flex flex-col w-full h-full gap-0 mt-8 md:mt-0">
				{#each prompts as prompt, index (prompt)}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="group relative bg-red border border-cream rounded-t-lg text-white  p-8 min-h-fit flex-1 hover:flex-[2] ease-in transition-all">
						<div>
							{#if promptQ[index].quote}
								<p class="font-serif text-sm">
									{promptQ[index].quote}
								</p>
							{/if}
							<p class="font-sans text-2xl">
								{promptQ[index].question}
							</p>
						</div>
					</div>
				{/each}
		</div>
	</section>
</div>


