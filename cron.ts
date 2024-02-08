const urlApiScraper = Deno.env.get("API_SCRAPER")

Deno.cron("run scraper", "*/15 * * * *", async () => {
	try {
		console.log("Cron job executado!");
        await fetch(urlApiScraper);
	} catch (error) {
		console.error("Erro durante a execução do cron job:", error.message);
	}
});

