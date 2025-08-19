
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../App.css";

const supabaseUrl = "https://soskcypcplxezkdzujvz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvc2tjeXBjcGx4ZXprZHp1anZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTcxNzEsImV4cCI6MjA3MTE5MzE3MX0.eG6McwEanLIGr6mDolrMhCzqoZvl_NldMGZ18VmVmP0";
const supabase = createClient(supabaseUrl, supabaseKey);

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    async function updateCounter() {
      try {
       
        const { data, error } = await supabase
          .from("visits")
          .select("count")
          .eq("id", 1)
          .single();

        if (error) throw error;

        const newCount = data.count + 1;

        
        const { data: updatedData, error: updateError } = await supabase
          .from("visits")
          .update({ count: newCount })
          .eq("id", 1)
          .select()
          .single();

        if (updateError) throw updateError;

        
        setVisits(updatedData.count);
      } catch (err) {
        console.error("Error updating counter:", err.message);
      }
    }

    updateCounter();
  }, []);

  return <div className="visit-counter">👀 {visits} visits</div>;
};

export default VisitCounter;
