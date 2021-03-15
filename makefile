start_dev:
	docker-compose -f docker-compose.dev.yml up -d $(services)

start_prod: 
	docker-compose -f docker-compose.prod.yml up -d --build $(services)
