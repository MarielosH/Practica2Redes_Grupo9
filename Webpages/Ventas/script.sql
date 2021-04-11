create table books(
	idlibro SERIAL primary key,
	titulo varchar(30) not null,
	autor varchar(20) not null,
	anio varchar(10) not null
)

insert into books(titulo,autor,anio) VALUES('El Presidente','Miguel Angel','2002');

select * from books;