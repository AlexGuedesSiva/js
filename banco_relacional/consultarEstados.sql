select * from estados

select 
       nome as 'Nome do Estado', 
       sigla 
from estados
where regiao = 'Sul'


select nome,regiao, populaçao from estados 
where populaçao >= 10
order by populaçao desc