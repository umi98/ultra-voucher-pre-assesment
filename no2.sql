-- CREATING TABLE
create table people (
id int primary key,
name varchar(255),
parent_id int,
foreign key(parent_id) references people(id)
);

-- INSERT VALUE TO PEOPLE
insert into people values
(1, 'Zaki', 2),
(2, 'Ilham', null),
(3, 'Irwan', 2),
(4, 'Arka', 3);

-- QUERY TO GET DESIRED RESULT
select p.id, p.name, p2.name as parent_name
from people p
left join people p2 on p.parent_id = p2.id
order by p.id;