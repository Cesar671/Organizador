import React from 'react';

export const CardN2 = ({ noticia }) => {
    if (!noticia) return <div>No hay noticia seleccionada</div>;
  
    return (
      <div style={styles.card}>
        <img src={noticia.image} alt={noticia.title} style={styles.image} />
        <div style={styles.overlay}>
          <div style={styles.date}>{noticia.date}</div>
          <h2 style={styles.title}>{noticia.title}</h2>
          <p style={styles.description}>{noticia.description}</p> 
          <div style={styles.tags}>
            {noticia.tags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

const styles = {
  card: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '800px',
    maxHeight: '500px',
    margin: '20px auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '20px',
  },
  date: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '22px',
    margin: '0 0 10px 0',
  },
  tags: {
    display: 'flex',
    gap: '10px',
  },
  tag: {
    backgroundColor: '#e50914',
    borderRadius: '3px',
    padding: '5px 10px',
    fontSize: '12px',
    color: 'white',
  },
};
