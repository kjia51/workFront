window.onload = function(){
    btn1.addEventListener('click', function(){
      let p = document.createElement('p');
      let textNode1 = document.createTextNode('servlet');
      p.appendChild(textNode1);
      let body = document.querySelector('body');
      body.appendChild(p);
      let p1 = document.createElement('p');
      let textNode2 = document.createTextNode('spring');
      p1.appendChild(textNode2);
      body.appendChild(p1);
    });

    btn2.addEventListener('click', function(){
      let node1 = document.createElement('p');
      let textNode1 = document.createTextNode('Java');
      node1.appendChild(textNode1);
      let body = document.querySelector('body');
      let p = document.querySelector('p');
      body.insertBefore(node1,p);
      let node2 = document.createElement('p');
      let textNode2 = document.createTextNode('Oracle');
      node2.appendChild(textNode2);
      // let p2 = p1.appendChild(textNode2);
      let p1 = document.querySelectorAll('p')[1];
      body.insertBefore(node2,p1);


    });

  }