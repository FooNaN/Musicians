start_dev:
	docker-compose -f docker-compose.dev.yml up -d $(services)

start_prod: 
	docker-compose -f docker-compose.prod.yml up -d --build $(services)

shut_down_dev:
	docker-compose -f docker-compose.dev.yml down

shut_down_prod:
	docker-compose -f docker-compose.prod.yml down
