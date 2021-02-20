start_dev:
	docker-compose up -d

start_prod: 
	docker-compose -f docker-compose.production.yml up -d
