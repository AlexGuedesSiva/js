select * from estados 

insert into cidades (nome, area, estado_id)
values ('campinas', 795, 29)

insert into cidades (nome, area, estado_id)
values ('Niterói',133.9, 23)

insert into cidades (nome, area, estado_id)
values ('Caruau', 920.6, (select id from estados where sigla = 'PE' ))

insert into cidades 
       (nome, area, estado_id)
values ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE')) 

select * from cidades 

-- update cidades  
-- set nome = 'Juazeiro do Norte'
-- where id = 4