import React from 'react';

const Categories = ({filterExercise}) => {

  return <div className='buttonStyle'>
    <button className='exerciseButton' onClick={()=> filterExercise('all')}> 
    all
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('bodyweight')}> 
    bodyweight
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('chest')}> 
    chest
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('back')}> 
    back
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('biceps')}> 
    biceps
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('tricep')}> 
    triceps
    </button>
    <button className='exerciseButton' onClick={()=> filterExercise('legs')}> 
    legs
    </button>
  </div>;
};

export default Categories;