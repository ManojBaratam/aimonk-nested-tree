from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# POST API
@app.post("/tree")
def create_tree(tree: dict, db: Session = Depends(get_db)):
    new_tree = models.Tree(tree_data=tree)
    db.add(new_tree)
    db.commit()
    db.refresh(new_tree)
    return new_tree

# GET API
@app.get("/tree")
def get_trees(db: Session = Depends(get_db)):
    return db.query(models.Tree).all()

# PUT API
@app.put("/tree/{tree_id}")
def update_tree(tree_id: int, tree: dict, db: Session = Depends(get_db)):
    existing = db.query(models.Tree).filter(models.Tree.id == tree_id).first()
    existing.tree_data = tree
    db.commit()
    return existing