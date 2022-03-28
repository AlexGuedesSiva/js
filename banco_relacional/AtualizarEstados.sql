
-- cuidade nao esqueca o where,
--  por que pode mudar todos os nomes se o usar.
update estados   
set nome = 'Maranhão'
where sigla = 'MA' 

select est.nome from estados est where sigla = 'MA'    

update estados 
set nome = 'Paraná', populaçao = 11.32
where sigla = 'PR'

select 
       est.nome,
       sigla,
       populaçao 
from estados est 
where sigla = 'PR' 