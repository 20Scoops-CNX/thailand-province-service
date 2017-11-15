Thailand Province And Amphur Service
----
A api service province and amphur in Thailand country by using Hapi Knex and Mysql with Docker for development

Getting Start
----
- git clone project
 ``` sh
   $ git clone https://github.com/jisack/thailand-province-service.git
 ```
- enter to directory and duplicate .env.example to .env and setting your mysql configuration
 ``` sh
  $ cd thailand-province-service
  $ cp .env.example .env
 ```
- run docker
 ``` sh
  $ docker-compose up -d
 ```
- shell in to docker container
 ``` sh
  $ docker exec -it thailandprovinceservice_app_1 bash
 ```
- run knex migration and seeds province,amphur data to database
 ``` sh
  docker-bash: $ knex migrate:latest
  docker-bash: $ knex seed:run
 ```
- so now you can run thailand-province-service on http://localhost:7000

Endpoint (API)
----
 - **[<code>GET</code> province](http://localhost:7000/province)**
 - **[<code>GET</code> amphur/{province_id}](http://localhost:7000/amphurs/10)**
 
LICENSE
----

Copyright 2017 Jinawong Jino

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


   
 
